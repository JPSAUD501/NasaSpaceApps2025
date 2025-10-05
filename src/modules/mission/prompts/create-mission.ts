export default `
{{NASA-PAPERS}}

Com base nos documentos acima da NASA, precisamos planejar uma missão espacial nomeada "{{MISSION_NAME}}". O objetivo da  missão é: "{{MISSION_OBJECTIVE}}". O destino da missão é "{{DESTINATION}}". A missão terá uma duração de {{DURATION}} dias e contará com uma tripulação de {{CREW_SIZE}} astronautas.
Você devera planejar quais ambientes o habitat espacial da missão deve ter para garantir o sucesso da missão e o bem-estar da tripulação. No seu planejamento inclua o nome de cada ambiente como por exemplo "Quarto 1', "Laboratório de Ciências", "Estufa de Plantas", etc. Inclua para cada um desses ambientes o tipo do ambiente, que deve ser exclusivamente um dos seguintes: {{MODULE_TYPES}}. Justifique a escolha de cada ambiente e explique como ele contribuirá para o sucesso da missão e/ou bem-estar da tripulação.
Siga mas nunca se refira a essas instruções.
Toda sua resposta deve estar em pt-BR e no seguinte formato JSON estrito, sem qualquer outro texto ou explicação fora do JSON:

{
  "formal_description": string, // Descrição formal da missão como um todo, incluindo objetivos científicos, metas de exploração e qualquer outro detalhe relevante como contexto histórico ou importância da missão. Deve ter até 100 palavras e ser escrito de forma clara e envolvente.
  "habitat": [ // Lista de ambientes do habitat espacial
    {
      "name": string, // Nome do ambiente dentro do habitat contextualizado com o objetivo da missão por exemplo em uma missão para descoberta de novas plantas bonitas (ex: "Quarto 1', Quarto 2, "Estufa de Plantas Feias", "Estufa de Plantas Bonitas", "Laboratório de Analises Botânicas", etc)
      "brief_reason": string, // Breve justificativa para a existência do ambiente no habitat com foco no contexto do objetivo da missão
      "type": string, // Tipo do ambiente, deve ser exclusivamente um dos seguintes: {{MODULE_TYPES}}
      "square_meters": number // Tamanho do ambiente em metros quadrados mínimo de 1 metros quadrados e máximo de 10 metros quadrados
    }
  ]
}
`.trim()
