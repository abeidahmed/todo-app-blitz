import ReactDOM from "react-dom"
import { useModal } from "app/core/hooks/useModal"
import ProjectCreateModal from "app/application/projects/modals/ProjectCreateModal"
import ProjectUpdateModal from "app/application/projects/modals/ProjectUpdateModal"
import { Suspense } from "react"

export const types = {
  PROJECT_CREATE_MODAL: "PROJECT_CREATE_MODAL",
  PROJECT_UPDATE_MODAL: "PROJECT_UPDATE_MODAL",
}

const MODAL_COMPONENTS = {
  [types.PROJECT_CREATE_MODAL]: ProjectCreateModal,
  [types.PROJECT_UPDATE_MODAL]: ProjectUpdateModal,
}

const ModalRoot = () => {
  const { modalType, modalProps } = useModal()

  if (!modalType) return null

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return ReactDOM.createPortal(
    <Suspense fallback="loading...">
      <SpecificModal {...modalProps} />
    </Suspense>,
    document.getElementById("modal-root")
  )
}

export default ModalRoot
