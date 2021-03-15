import OutsideClickHandler from "react-outside-click-handler"
import * as Feather from "react-feather"
import { useModal } from "app/core/hooks/useModal"

type ModalHeaderProps = {
  modalTitle?: string
}

const ModalHeader = ({ modalTitle }: ModalHeaderProps) => {
  const { hideModal } = useModal()

  if (!modalTitle) return null

  return (
    <header className="flex items-center justify-between px-4 py-3 sm:px-6 border-b">
      <h2 className="text-base font-semibold">{modalTitle}</h2>
      <button type="button" onClick={() => hideModal()} className="text-gray-500">
        <Feather.X size={20} />
      </button>
    </header>
  )
}

type ModalWrapperType = {
  children: JSX.Element | JSX.Element[]
  closeOnOutsideClick?: boolean
  modalTitle?: string
}

const ModalWrapper = ({ children, modalTitle, closeOnOutsideClick = true }: ModalWrapperType) => {
  const { hideModal } = useModal()

  let actionFunction: () => void

  if (closeOnOutsideClick) {
    actionFunction = () => hideModal()
  } else {
    actionFunction = () => {}
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" />
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-20 sm:align-top sm:max-w-lg w-full">
          <OutsideClickHandler onOutsideClick={actionFunction}>
            <div className="bg-white">
              <ModalHeader modalTitle={modalTitle} />
              <div className="px-4 pt-4 sm:px-6 sm:pt-6">{children}</div>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  )
}

export default ModalWrapper
