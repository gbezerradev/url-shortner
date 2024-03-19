import ShortenedUrlsService from '#services/shortened_urls_service'
import { createShortenedUrl } from '#validators/shortened_url_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class ShortenedUrlsController {
  async index({ response }: HttpContext) {
    const shortenedUrls = await ShortenedUrlsService.getAll()

    return response.json(shortenedUrls)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createShortenedUrl)
    const shortenedUrl = await ShortenedUrlsService.create(payload)

    return response.status(201).json(shortenedUrl)
  }
}
