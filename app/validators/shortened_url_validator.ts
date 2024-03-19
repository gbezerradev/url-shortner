import vine from '@vinejs/vine'

export const createShortenedUrl = vine.compile(
  vine.object({
    originalUrl: vine.string().url(),
    shortenedUrl: vine.string().alphaNumeric().minLength(3),
  })
)
