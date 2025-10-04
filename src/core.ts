import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { INestApplication, VersioningType, VERSION_NEUTRAL } from '@nestjs/common'
import { openapiDocuments } from './config'
import { NestExpressApplication } from '@nestjs/platform-express'
import { HttpExceptionFilter } from './exception.filter'
import { patchNestJsSwagger } from 'nestjs-zod'
import * as bodyParser from 'body-parser'

patchNestJsSwagger()

export async function core (): Promise<INestApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.use('/api/payments/webhook', bodyParser.raw({ type: '*/*' }))
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  app.enableCors({
    origin: '*'
  })
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL
  })
  app.useGlobalFilters(new HttpExceptionFilter())
  app.setGlobalPrefix('api')
  const config = new DocumentBuilder()
    .setTitle('OutOfSpace 2025 API')
    .setDescription('{{DESCRIPTION}}')
    .addBearerAuth()
    .setVersion('2.0')
    .build()
  openapiDocuments.push(SwaggerModule.createDocument(app, config))
  return app
}
