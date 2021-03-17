import { Suspense } from "react"
import { useMutation, useRouter, Link, useSession } from "blitz"
import * as Icon from "react-feather"
import logout from "app/auth/mutations/logout"
import Avatar from "app/core/components/Avatar"
import Toggler from "app/core/components/Toggler"

const HeaderMenu = ({ isActive }: { isActive: boolean }) => {
  const { name, email } = useSession()
  const [logoutMutation] = useMutation(logout)
  const router = useRouter()

  const handleLogout = async () => {
    await logoutMutation()
    await router.push("/")
  }

  return (
    <div className={`${!isActive && "hidden"} dropdown w-72 right-0 left-auto`}>
      <ul className="py-1">
        <li>
          <a
            href="#"
            className="block py-2 px-3 hover:bg-gray-100 text-gray-700 hover:no-underline"
          >
            <div className="flex items-center space-x-3">
              <Avatar userName="Abeid Ahmed" size={11} />
              <div>
                <span className="block font-semibold text-gray-900 leading-5">{name}</span>
                <span className="block leading-5">{email}</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-3">
              <Icon.Settings strokeWidth={1} size={20} />
              <span className="leading-5">Settings</span>
            </div>
          </a>
        </li>
        <li>
          <hr className="my-1" />
        </li>
        <li>
          <a href="#" className="dropdown-menu">
            <Icon.Box strokeWidth={1} size={20} />
            <span className="leading-5">Theme</span>
          </a>
        </li>
        <li>
          <a href="#" className="dropdown-menu">
            <Icon.Activity strokeWidth={1} size={20} />
            <span className="leading-5">Activity log</span>
          </a>
        </li>
        <li>
          <hr className="my-1" />
        </li>
        <li>
          <button type="button" className="dropdown-menu" onClick={handleLogout}>
            <Icon.LogOut strokeWidth={1} size={20} />
            <span className="leading-5">Log out</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

type HeaderProps = {
  toggleSidebar: () => void
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="bg-brand px-4 sm:px-6 lg:px-10">
      <div className="flex items-center justify-between h-11">
        <div className="flex items-center">
          <button
            type="button"
            className="-ml-1 p-1 rounded hover:bg-white hover:bg-opacity-25 text-white lg:hidden"
            onClick={toggleSidebar}
          >
            <Icon.Menu size={20} strokeWidth={1} />
          </button>
          <Link href="/app/today">
            <a className="ml-2 p-1 rounded hover:bg-white hover:bg-opacity-25 text-white lg:-ml-1">
              <Icon.Home size={20} strokeWidth={1} />
            </a>
          </Link>
        </div>
        <div>
          <Toggler>
            {(isActive, setIsActive) => (
              <div className="relative">
                <div className="flex items-center">
                  <button type="button" onClick={() => setIsActive(!isActive)}>
                    <Avatar userName="Abeid Ahmed" />
                  </button>
                </div>
                <Suspense fallback="Loading...">
                  <HeaderMenu isActive={isActive} />
                </Suspense>
              </div>
            )}
          </Toggler>
        </div>
      </div>
    </header>
  )
}

export default Header
