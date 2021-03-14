import { Link } from "blitz"
import * as Feather from "react-feather"
import Icon from "app/core/components/Icon"

type SidebarProps = {
  sidebarActive: boolean
}

const Sidebar = ({ sidebarActive }: SidebarProps) => {
  return (
    <>
      <div
        className={`${
          !sidebarActive && "hidden"
        } absolute inset-x-0 bottom-0 top-11 bg-gray-900 bg-opacity-50 lg:hidden`}
      />
      <aside
        className={`${
          sidebarActive ? "translate-x-0" : "-translate-x-full"
        } w-72 bg-gray-50 transition duration-150 ease-in-out transform fixed lg:static lg:translate-x-0`}
        style={{ height: "calc(100vh - 44px)" }}
      >
        <nav className="pr-2 py-7 pl-1 sm:pl-2 lg:pl-7 space-y-3">
          <div className="space-y-1">
            <Link href="/app/today">
              <a className="flex items-center text-gray-700 rounded py-1.5 px-3 hover:bg-gray-200 hover:no-underline">
                <Icon
                  icon="today"
                  className="text-green-600 -ml-1 w-6 h-6"
                  type="fill"
                  viewBox="0 0 24 24"
                />
                <span className="leading-5 ml-2">Today</span>
              </a>
            </Link>
            <Link href="/app/upcoming">
              <a className="flex items-center text-gray-700 rounded py-1.5 px-3 hover:bg-gray-200 hover:no-underline">
                <Icon
                  icon="upcoming"
                  className="text-blue-600 -ml-1 w-6 h-6"
                  type="fill"
                  viewBox="0 0 24 24"
                />
                <span className="leading-5 ml-2">Upcoming</span>
              </a>
            </Link>
          </div>
          <div>
            <div className="flex items-center justify-between hover:bg-gray-200 rounded transition duration-150 ease-in-out">
              <button
                type="button"
                className="block flex-1 py-2 pl-3 text-left rounded-l leading-5 text-gray-900 font-semibold"
              >
                Projects
              </button>
              <button
                type="button"
                className="text-gray-500 rounded-r px-3 py-2 hover:text-gray-900"
              >
                <Feather.Plus strokeWidth={1} size={20} />
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
