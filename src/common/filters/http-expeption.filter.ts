import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { AxiosError } from 'axios'

@Catch(AxiosError)
export class HttpExceptionFilter implements ExceptionFilter<AxiosError> {
  catch(exception: AxiosError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const { status: statusCode, data } = exception.response

    response.status(statusCode).json({
      statusCode,
      message: data['message'],
      timestamp: new Date().toISOString(),
    })
  }
}
