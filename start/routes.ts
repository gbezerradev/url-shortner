const ShortenedUrlsController = () => import('#controllers/shortened_urls_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', async () => {
      return { status: 'ok' }
    })

    router.post('/links', [ShortenedUrlsController, 'store'])
  })
  .prefix('api')
