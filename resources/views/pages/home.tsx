import { Layout } from '../../Layout.js'
import { route } from '#start/view'

export function Home() {
  return (
    <>
      <Layout>
        <h1 class="text-red-500">Home</h1>
        <a class="hover:text-[#f45b69] md:text-2xl" href={route('/login')}>
          Se connecter
        </a>
      </Layout>
    </>
  )
}
