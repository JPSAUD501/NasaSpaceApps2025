#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import base64
from io import BytesIO
from datetime import datetime, timezone
from typing import Iterable

# --- Markdown -> HTML ---
try:
    import markdown  # type: ignore # python-markdown
except ImportError:
    print("Erro: biblioteca 'markdown' não encontrada. pip install markdown", file=sys.stderr)
    sys.exit(2)

# Tenta usar apenas xhtml2pdf (puro Python)
def _mk_html_to_pdf_bytes():
    try:
        from xhtml2pdf import pisa  # type: ignore
        def html_to_pdf_bytes(html: str) -> bytes:
            out = BytesIO()
            result = pisa.CreatePDF(src=html, dest=out, encoding='utf-8')
            if getattr(result, "err", 0):
                raise RuntimeError("Falha ao gerar PDF com xhtml2pdf")
            return out.getvalue()
        return html_to_pdf_bytes, "xhtml2pdf"
    except Exception:
        return None, None

html_to_pdf_bytes, engine = _mk_html_to_pdf_bytes()
if html_to_pdf_bytes is None:
    print(
        "Erro: nenhuma engine de PDF disponível. "
        "Instale 'xhtml2pdf'.",
        file=sys.stderr
    )
    sys.exit(3)


def _first_successful_decode(data: bytes, encodings: Iterable[str]) -> str:
    for encoding in encodings:
        try:
            return data.decode(encoding)
        except UnicodeDecodeError:
            continue
        # Último recurso: substitui bytes inválidos pelo caractere U+FFFD
    return data.decode("utf-8", errors="replace")


def _sanitize_utf8(text: str) -> str:
    try:
        text.encode("utf-8")
        return text
    except UnicodeEncodeError:
        return text.encode("utf-8", errors="replace").decode("utf-8")

def md_to_html(md_text: str) -> str:
    # Extensões úteis: tabelas, blocos de código, etc.
    exts = ["extra", "fenced_code", "tables", "codehilite"]
    body = markdown.markdown(md_text, extensions=exts)

    # CSS básico inline (funciona em ambas engines)
    css = """
    body { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, "Noto Sans", sans-serif; line-height: 1.5; font-size: 12pt; }
    h1, h2, h3 { margin-top: 18pt; }
    pre, code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; }
    pre { background: #f6f8fa; padding: 10pt; border-radius: 6pt; overflow: auto; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 6pt; }
    blockquote { color: #555; border-left: 4pt solid #ddd; margin: 0; padding-left: 10pt; }
    """

    # Template HTML simples
    html = f"""<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8">
<meta name="generator" content="md2pdf_base64.py">
<meta name="created" content="{datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')}">
<style>{css}</style>
<title>Documento</title>
</head>
<body>
{body}
</body>
</html>"""
    return html

def main():
    raw = sys.stdin.buffer.read()
    if not raw.strip():
        print("Erro: entrada vazia. Envie o Markdown via stdin.", file=sys.stderr)
        sys.exit(1)

    preferred_encodings = (
        "utf-8-sig",  # BOM-friendly
        "utf-8",
        "utf-16",
        "utf-16-le",
        "utf-16-be",
    )

    md = _sanitize_utf8(_first_successful_decode(raw, preferred_encodings))

    try:
        html = md_to_html(md)
        if html_to_pdf_bytes is None:
            print("Erro: nenhuma engine de PDF disponível.", file=sys.stderr)
            sys.exit(3)
        pdf_bytes = html_to_pdf_bytes(_sanitize_utf8(html))
        b64 = base64.b64encode(pdf_bytes).decode("ascii")
        # Apenas a string base64 no stdout
        sys.stdout.write(b64)
        sys.stdout.flush()
    except Exception as e:
        print(f"Erro ao converter Markdown para PDF ({engine}): {e}", file=sys.stderr)
        sys.exit(4)

if __name__ == "__main__":
    main()
