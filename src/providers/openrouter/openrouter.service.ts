import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { OpenAI } from 'openai'

@Injectable()
export class OpenRouterService {
  private readonly openrouterApiKey: string
  private readonly openaiClient: OpenAI

  constructor (private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('OPENROUTER_API_KEY')
    if (apiKey === undefined) {
      throw new Error('OPENROUTER_API_KEY not found in configuration.')
    }
    this.openrouterApiKey = apiKey
    this.openaiClient = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: this.openrouterApiKey
    })
  }

  getApiKey (): string {
    return this.openrouterApiKey
  }

  getClient (): OpenAI {
    return this.openaiClient
  }
}
