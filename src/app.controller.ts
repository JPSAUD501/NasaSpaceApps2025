import { Controller, Get, Query, Redirect, Req, Res, VERSION_NEUTRAL, Version } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiExcludeEndpoint, ApiQuery, ApiTags, OpenAPIObject, ApiOperation } from '@nestjs/swagger'
import { Request, Response } from 'express'

@Controller()
@ApiTags('App')
export class AppController {
  constructor (private readonly appService: AppService) {}

  @Get('health')
  @Version([VERSION_NEUTRAL])
  @ApiOperation({ description: 'Check health status of the application' })
  getHealth (): string {
    return this.appService.getHealth()
  }

  @Get('scalar')
  @ApiQuery({ name: 'layout', required: false })
  @ApiQuery({ name: 'theme', required: false })
  @ApiQuery({ name: 'font', required: false })
  @ApiExcludeEndpoint()
  @Version(VERSION_NEUTRAL)
  getScalar (@Req() req: Request, @Res() res: Response, @Query('layout') layout?: string, @Query('theme') theme?: string, @Query('font') font?: string): void {
    this.appService.getScalarInterface(req, res, layout, theme, font)
  }

  @Get('openapi.json')
  @Version(VERSION_NEUTRAL)
  @ApiOperation({ description: 'Retrieve OpenAPI JSON specification' })
  getOpenApiJson (): OpenAPIObject {
    return this.appService.getOpenApiJson()
  }

  @Get('openapi')
  @ApiExcludeEndpoint()
  @Version(VERSION_NEUTRAL)
  @Redirect('scalar', 302)
  getOpenApiDefaultInterface (): void {}

  @Get('')
  @ApiExcludeEndpoint()
  @Version(VERSION_NEUTRAL)
  @Redirect('api/openapi', 302)
  getOpenApiInterface (): void {}

  @Get('api/openapi')
  @ApiExcludeEndpoint()
  @Version(VERSION_NEUTRAL)
  @Redirect('../openapi', 302)
  getFixOpenApiInterfaceRedirection (): void {}
}
