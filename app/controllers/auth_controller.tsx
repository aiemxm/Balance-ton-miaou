import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Provider from '#models/provider'
import { Login } from '#resources/views/pages/Login'
//todo : refactor with service and dependency injection
export default class AuthController {
  async login({ view }: HttpContext) {
    return <Login />
  }

  async redirect({ params, ally }: HttpContext) {
    return ally.use(params.provider).redirect()
  }

  async callback({ ally, auth, params, response }: HttpContext) {
    console.log(params.provider)
    const provider = ally.use(params.provider)
    if (provider.accessDenied()) {
      return 'You have cancelled the login process'
    }
    if (provider.stateMisMatch()) {
      return 'We are unable to verify the request. Please try again'
    }
    if (provider.hasError()) {
      return provider.getError()
    }

    const providerUser = await provider.user()

    const user = await User.firstOrCreate({
      email: providerUser.email,
      fullName: providerUser.name,
    })

    // Vérifie si un provider existe déjà
    const existingProvider = await Provider.query()
      .where('provider_name', params.provider)
      .where('provider_user_id', providerUser.id)
      .first()

    if (!existingProvider) {
      await user.related('providers').create({
        userId: user.id,
        providerName: params.provider,
        providerUserId: providerUser.id,
        additionalInfo: { avatarUrl: providerUser.avatarUrl },
      })
    }

    await auth.use('web').login(user)
    return response.redirect('/cats')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
