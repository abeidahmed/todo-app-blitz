import { createContext, useReducer } from "react"
import { modalReducer, initialState } from "app/core/reducers/modalReducer"

export interface InitialState {
  modalType: string | null
  modalProps: object
}

export const ModalContext = createContext<InitialState[] | any>(initialState)

const ModalStore = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<any, InitialState>>(modalReducer, initialState)

  return <ModalContext.Provider value={[state, dispatch]}>{children}</ModalContext.Provider>
}

export default ModalStore
