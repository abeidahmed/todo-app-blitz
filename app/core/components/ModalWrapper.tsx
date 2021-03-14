import OutsideClickHandler from "react-outside-click-handler"
import { useModal } from "app/core/hooks/useModal"

type ModalWrapperType = {
  children: JSX.Element | JSX.Element[]
  closeOnOutsideClick?: boolean
}

const ModalWrapper = ({ children, closeOnOutsideClick = true }: ModalWrapperType) => {
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
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-20 sm:align-top sm:max-w-lg sm:w-full">
          <OutsideClickHandler onOutsideClick={actionFunction}>{children}</OutsideClickHandler>
        </div>
      </div>
    </div>
  )
}

export default ModalWrapper
