import { route } from '#start/view'

export function Login() {
  return (
    <>
      <h1 class="text-red-500">Login</h1>
      <a href={route('oauth.redirect', { provider: 'google' })}>Se connecter avec Google</a>

      <a href={route('oauth.redirect', { provider: 'spotify' })}>Se connecter avec Spotify</a>
    </>
  )
}
