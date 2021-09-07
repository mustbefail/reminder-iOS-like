import { UiState, setFormVisibleAction, UiActionEnum } from './types';

const initState: UiState = {
  isFormVisible: false,
};

export default function uiReducer(
  state = initState,
  action: setFormVisibleAction
) {
  switch (action.type) {
    case UiActionEnum.SET_FORM_VISIBILITY:
      return { ...state, isFormVisible: action.payload.isVisible };
    default:
      return state;
  }
}
