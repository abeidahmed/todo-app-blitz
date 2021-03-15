import ReactDOM from "react-dom"
import { useModal } from "app/core/hooks/useModal"
import ProjectFormModal from "app/application/projects/components/ProjectFormModal"
import { Suspense } from "react"

export const types = {
  PROJECT_FORM_MODAL: "PROJECT_FORM_MODAL",
}

const MODAL_COMPONENTS = {
  [types.PROJECT_FORM_MODAL]: ProjectFormModal,
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
