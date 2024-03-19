import ShortenedUrl from '#models/shortened_url'

type IShortenedUrl = {
  originalUrl: string
  shortenedUrl?: string
}

export default class ShortenedUrlsService {
  static async create(payload: IShortenedUrl) {
    const shortenedUrl = new ShortenedUrl()
    shortenedUrl.originalUrl = payload.originalUrl
    shortenedUrl.shortenedUrl = payload.shortenedUrl || Math.random().toString(36).substring(7)
    await shortenedUrl.save()

    return shortenedUrl
  }
}
