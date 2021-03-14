import { useContext } from "react"
import { ModalContext, InitialState } from "app/core/stores/modal"
import { modalActionTypes } from "app/core/actionTypes"
import { types } from "app/core/components/ModalRoot"

export const useModal = () => {
  const [{ modalType, modalProps }, dispatch] = useContext<InitialState[] | any>(ModalContext)

  const showModal = (payload) => dispatch({ type: modalActionTypes.open, payload })
  const hideModal = () => dispatch({ type: modalActionTypes.close })

  return { showModal, hideModal, modalType, modalProps, types }
}
