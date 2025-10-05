{{NASA-PAPERS}}

Com base nos documentos acima da NASA, precisamos planejar uma missão espacial nomeada "{{MISSION_NAME}}". O objetivo da  missão é: "{{MISSION_OBJECTIVE}}". O destino da missão é "{{DESTINATION}}". A missão terá uma duração de {{DURATION}} dias e contará com uma tripulação de {{CREW_SIZE}} astronautas.
Você devera planejar quais ambientes o habitat espacial da missão deve ter para garantir o sucesso da missão e o bem-estar da tripulação. No seu planejamento inclua o nome de cada ambiente como por exemplo "Quarto 1', "Laboratório de Ciências", "Estufa de Plantas", etc. Inclua para cada um desses ambientes o tipo do ambiente, que deve ser exclusivamente um dos seguintes: {{MODULE_TYPES}}. Justifique a escolha de cada ambiente e explique como ele contribuirá para o sucesso da missão e/ou bem-estar da tripulação.

{
  "formal_description": string, // Descrição formal e detalhada da missão como um todo, incluindo objetivos científicos, metas de exploração e qualquer outro detalhe relevante como contexto histórico ou importância da missão. Deve ter entre 100 e 300 palavras e ser escrito de forma clara e envolvente.
  "habitat_dimensions": { // Dimensões do habitat espacial que a missão utilizará no destino especificado
    "x_width": number, // Tamanho no eixo X em metros (mínimo de 5 metros e máximo de 15 metros)
    "y_width": number // Tamanho no eixo Y em metros (mínimo de 5 metros e máximo de 15 metros)
  },
  "habitat": [ // Lista de ambientes do habitat espacial
    {
      "name": string, // Nome do ambiente dentro do habitat (ex: "Quarto 1', Quarto 2, "Laboratório de Ciências", "Estufa de Plantas", etc)
      "reason": string, // Justificativa para a existência do ambiente no habitat
      "type": string, // Tipo do ambiente, deve ser exclusivamente um dos seguintes: {{MODULE_TYPES}}
      "square_meters": number // Tamanho do ambiente em metros quadrados mínimo de 1 metros quadrados e máximo de 10 metros quadrados
    }
  ]
}
