/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const AuthController = () => import('#controllers/auth_controller')

const CatsController = () => import('#controllers/cats_controller')

router.on('/').render('pages/home')
router.get('/logout', [AuthController, 'logout'])
router
  .group(() => {
    router.get('/login', [AuthController, 'login'])
    router
      .get('/:provider/redirect', [AuthController, 'redirect'])
      .where('provider', /google|spotify/)
      .as('oauth.redirect')
    router
      .get('/:provider/callback', [AuthController, 'callback'])
      .where('provider', /google|spotify/)
      .as('oauth.callback')
  })
  .middleware(middleware.guest())

// Routes authentifiées
router
  .group(() => {
    // Gestion des chats
    router.get('/cats', [CatsController, 'index'])
    router.get('/cats/:catId', [CatsController, 'show'])
    router.post('/cats/edit', [CatsController, 'edit'])

    // Gestion des pesées
    router.get('/cats/:catId/weights', 'weight_records_controller.index')
    router.post('/cats/:catId/weights', 'weight_records_controller.store')
    router.delete('/cats/:catId/weights/:id', 'weight_records_controller.destroy')
  })
  .use(middleware.auth())
