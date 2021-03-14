import { InitialState } from "app/core/stores/modal"
import { modalActionTypes } from "app/core/actionTypes"

export const initialState: InitialState = {
  modalType: null,
  modalProps: {},
}

export const modalReducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.open:
      return {
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps || {},
      }
    case modalActionTypes.close:
      return {
        state,
      }
    default:
      throw new Error(`Unhandled type: ${action.type}`)
  }
}
