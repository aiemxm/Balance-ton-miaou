import { route } from '#start/view'

export function Navbar() {
  return (
    <nav class="w-100 px-8 md:px-auto border-b-2 border-b-vermilion font-lato">
      <div class="h-24 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div class="max-md:hidden md:order-1">
          <h1 class="text-xl md:font-bold font-montserrat md:text-xl">Balance ton miaou</h1>
        </div>
        <div class="order-3 w-full md:w-auto md:order-2">
          <ul class="flex font-semibold md:justify-between justify-evenly">
            <li class="md:px-4 md:py-2">
              <a class="hover:text-[#f45b69] md:text-2xl" href={route('/')} up-target=".main">
                Accueil
              </a>
            </li>
            <li class="md:px-4 md:py-2">
              <a class="hover:text-[#f45b69] md:text-2xl" href={route('/cats')} up-target=".main">
                Chats
              </a>
            </li>
          </ul>
        </div>
        <div class="order-2 md:order-3">USER</div>
      </div>
    </nav>
  )
}
