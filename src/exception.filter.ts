import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch (exception: HttpException, host: ArgumentsHost): void {
    const stackTraceEnv = process.env.STACK_TRACE
    const enableStackTrace = stackTraceEnv?.toLowerCase() === 'true'
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    response
      .status(status)
      .json({
        status_code: status,
        timestamp: new Date().toISOString(),
        message: exception.message,
        path: request.url,
        stack: enableStackTrace ? exception.stack : undefined
      })
  }
}
