import { Injectable } from '@nestjs/common'
import { OpenAPIObject } from '@nestjs/swagger'
import { openapiDocuments } from './config'
import { Request, Response } from 'express'

@Injectable()
export class AppService {
  getHealth (): string {
    return 'OK'
  }

  getOpenApiJson (): OpenAPIObject {
    const openAPIObject = openapiDocuments[0]
    openAPIObject.paths = {
      ...openAPIObject.paths
    }
    return openAPIObject
  }

  getScalarInterface (req: Request, res: Response, layout?: string, theme?: string, font?: string): void {
    const themeOptions = ['default', 'moon', 'purple', 'solarized', 'bluePlanet', 'deepSpace', 'saturn', 'kepler', 'mars']
    const fontOptions = ['noto', 'lexend']
    const getSelectedOption = (options: string[], userOption: string | undefined, fallback: string): string => {
      return options.find(opt => opt.toLowerCase() === (userOption?.toLowerCase() ?? '')) ?? fallback
    }
    const selectedTheme = getSelectedOption(themeOptions, theme, 'random')
    const selectedFont = getSelectedOption(fontOptions, font, 'lexend')
    const randomTheme = themeOptions[Math.floor(Math.random() * themeOptions.length)]
    const appliedTheme = selectedTheme !== 'random' ? selectedTheme : randomTheme
    const baseConfig = {
      metaData: { title: 'OutOfSpace 2025 API' },
      hideModels: false,
      withDefaultFonts: false,
      darkMode: true,
      theme: appliedTheme
    }
    const config = {
      ...baseConfig,
      layout: layout === 'classic' ? 'classic' : 'modern'
    }
    const fontStyles = {
      noto: {
        fontName: 'noto',
        head: `<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
        <style>:root { --scalar-font: 'Noto Sans', sans-serif; }</style>`
      },
      lexend: {
        fontName: 'lexend',
        head: `<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap" rel="stylesheet">
        <style>:root { --scalar-font: 'Lexend', sans-serif; }</style>`
      }
    }
    const head = fontStyles[selectedFont.toLowerCase() as keyof typeof fontStyles] ?? fontStyles.lexend
    const protocol = (() => {
      try {
        return `${req.protocol}:`
      } catch {
        return new URL(req.url).protocol
      }
    })()
    const buildLink = (layout: string, theme: string, font: string): string => {
      return `${protocol}//${req.get('host')}/api/scalar?layout=${layout}&theme=${theme}&font=${font}`
    }
    const themeLinks = [
      ...themeOptions.map(t => `[${t.charAt(0).toUpperCase() + t.slice(1)}](${buildLink(config.layout, t.toLowerCase(), selectedFont.toLowerCase())})`),
      `or use a [random theme](${buildLink(config.layout, 'random', selectedFont.toLowerCase())}) for each visit.`
    ].join(', ')
    const fontLinks = [
      ...fontOptions.map(f => `[${f.charAt(0).toUpperCase() + f.slice(1)}](${buildLink(config.layout, appliedTheme.toLowerCase(), f.toLowerCase())})`),
      `or use the [default font](${buildLink(config.layout, appliedTheme.toLowerCase(), 'default')})`
    ].join(', ')
    const description = [
      'Welcome to the official OutOfSpace 2025 API documentation! Use this space to explore all available resources and endpoints in an interactive and personalized way.',
      `Currently, you are viewing the documentation with the **[${config.layout}](${buildLink(config.layout, appliedTheme.toLowerCase(), selectedFont.toLowerCase())})** layout, **[${appliedTheme.toLowerCase()}](${buildLink(config.layout, appliedTheme.toLowerCase(), selectedFont.toLowerCase())})** theme, and **[${head.fontName.toLowerCase()}](${buildLink(config.layout, appliedTheme.toLowerCase(), selectedFont.toLowerCase())})** font.`,
      '',
      '**Customize your reading experience:**',
      `- **Layout**: Switch between [Modern](${buildLink('modern', appliedTheme.toLowerCase(), selectedFont.toLowerCase())}) ${config.layout === 'modern' ? '(Current)' : ''} and [Classic](${buildLink('classic', appliedTheme.toLowerCase(), selectedFont.toLowerCase())}) ${config.layout === 'classic' ? '(Current)' : ''}.`,
      `- **Theme**: Experiment with different styles: ${themeLinks}`,
      `- **Font**: Choose your preferred font: ${fontLinks}`,
      '',
      'Explore the endpoints, view request and response examples, and take the opportunity to test integrations directly from here. Use the options above to customize the interface to your liking!'
    ].join('<br>')
    const openApi = JSON.stringify(this.getOpenApiJson())
    const parsedOpenApi = openApi.replaceAll('{{DESCRIPTION}}', description)
    res.setHeader('Content-Type', 'text/html')
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            ${head.head}
        </head>
        <body>
            <script id="api-reference" type="application/json">${parsedOpenApi}</script>
            <script>
                const configuration = ${JSON.stringify(config)};
                document.getElementById('api-reference').dataset.configuration = JSON.stringify(configuration);
                const urlParams = new URLSearchParams(window.location.search);
                urlParams.set('layout', '${config.layout}');
                urlParams.set('theme', '${selectedTheme === 'random' ? 'random' : appliedTheme.toLowerCase()}');
                urlParams.set('font', '${selectedFont.toLowerCase()}');
                window.history.replaceState(null, '', '?' + urlParams.toString());
            </script>
            <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
            <script>
                document.querySelectorAll('a').forEach(link => link.setAttribute('target', '_self'));
            </script>
        </body>
        </html>
    `)
  }
}
