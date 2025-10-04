import { core } from './core'
import { SwaggerModule } from '@nestjs/swagger'
import { openapiDocuments } from './config'

async function bootstrap (): Promise<void> {
  const app = await core()
  SwaggerModule.setup('/swagger', app, openapiDocuments[0], {
    useGlobalPrefix: true,
    jsonDocumentUrl: '/openapi.json',
    yamlDocumentUrl: '/openapi.yaml'
  })
  await app.listen(process.env.API_PORT ?? '')
}
void bootstrap()
