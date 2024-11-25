import { Vite } from '#start/view'
import type { Children } from '@kitajs/html'
import { Navbar } from '#resources/views/partials/Navbar'

interface LayoutProps {
  children: Children
}

export function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://cdn.tailwindcss.com"></script>
          <title>Balance ton miaou</title>

          <Vite.Entrypoint entrypoints={['resources/css/app.css', 'resources/js/app.js']} />
        </head>
        <body>
          <Navbar />
          <div class="main">{children}</div>
        </body>
      </html>
    </>
  )
}
