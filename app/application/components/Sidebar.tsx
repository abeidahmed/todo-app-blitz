import { Suspense } from "react"
import { Link, usePaginatedQuery } from "blitz"
import * as Feather from "react-feather"
import getProjects from "app/application/projects/queries/getProjects"
import Icon from "app/core/components/Icon"
import { useModal } from "app/core/hooks/useModal"
import Toggler from "app/core/components/Toggler"

const ProjectList = () => {
  const [{ projects }] = usePaginatedQuery(getProjects, {
    orderBy: { name: "asc" },
  })

  return (
    <ul className="space-y-1 mt-1">
      {projects.map((project) => (
        <li
          key={project.id}
          className="flex items-center justify-between hover:bg-gray-200 rounded transition duration-150 ease-in-out"
        >
          <Link href={`/app/projects/${project.id}`}>
            <a className="flex items-center flex-1 min-w-0 py-2 pl-3 space-x-3 text-left rounded-l leading-5 text-gray-700 hover:no-underline">
              <span
                className="block p-1 rounded-full"
                style={{ backgroundColor: project.color }}
              ></span>
              <span className="leading-5 truncate">{project.name}</span>
            </a>
          </Link>
          <div className="relative">
            <Toggler>
              {(isActive, setIsActive) => (
                <>
                  <button
                    type="button"
                    className="text-gray-500 rounded-r px-3 py-2 hover:text-gray-900"
                    onClick={() => setIsActive(!isActive)}
                  >
                    <Feather.MoreHorizontal strokeWidth={1} size={20} />
                  </button>
                  <div
                    className={`${
                      !isActive && "hidden"
                    } mt-1 z-10 absolute left-0 origin-top-left w-64 bg-white rounded border shadow`}
                  >
                    <ul className="py-1">
                      <li>
                        <button
                          type="button"
                          className="flex items-center w-full text-left space-x-2 py-2 px-3 hover:bg-gray-100 text-gray-700 hover:no-underline"
                        >
                          <Feather.Edit3 strokeWidth={1} size={20} />
                          <span className="leading-5">Edit project</span>
                        </button>
                      </li>
                      <li>
                        <hr className="my-1" />
                      </li>
                      <li>
                        <button
                          type="button"
                          className="flex items-center w-full text-left space-x-2 py-2 px-3 hover:bg-gray-100 text-gray-700 hover:text-brand-600 hover:no-underline"
                        >
                          <Feather.Trash2 strokeWidth={1} size={20} />
                          <span className="leading-5">Delete project</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </Toggler>
          </div>
        </li>
      ))}
    </ul>
  )
}

type SidebarProps = {
  sidebarActive: boolean
}

const Sidebar = ({ sidebarActive }: SidebarProps) => {
  const { showModal, types } = useModal()

  return (
    <>
      <div
        className={`${
          !sidebarActive && "hidden"
        } absolute inset-x-0 bottom-0 top-11 bg-black bg-opacity-50 lg:hidden`}
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
                onClick={() =>
                  showModal({
                    modalType: types.PROJECT_FORM_MODAL,
                  })
                }
              >
                <Feather.Plus strokeWidth={1} size={20} />
              </button>
            </div>
            <Suspense fallback="Loading...">
              <ProjectList />
            </Suspense>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
