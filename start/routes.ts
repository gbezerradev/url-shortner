import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', async () => {
      return { status: 'ok' }
    })
  })
  .prefix('api/v1')
