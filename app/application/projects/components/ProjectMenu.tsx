import * as Feather from "react-feather"
import { useModal } from "app/core/hooks/useModal"

type ProjectMenuProps = {
  isActive: boolean
  projectId: string | number
}

const ProjectMenu = ({ isActive, projectId }: ProjectMenuProps) => {
  const { showModal, types } = useModal()

  return (
    <div className={`${!isActive && "hidden"} dropdown md:origin-top-left md:left-0 md:right-auto`}>
      <ul className="py-1">
        <li>
          <button
            type="button"
            className="dropdown-menu"
            onClick={() => {
              showModal({
                modalType: types.PROJECT_UPDATE_MODAL,
                modalProps: {
                  projectId,
                },
              })
            }}
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
            className="dropdown-menu dropdown-menu-danger"
            onClick={() => {
              showModal({
                modalType: types.PROJECT_DELETE_MODAL,
                modalProps: {
                  projectId,
                },
              })
            }}
          >
            <Feather.Trash2 strokeWidth={1} size={20} />
            <span className="leading-5">Delete project</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ProjectMenu
