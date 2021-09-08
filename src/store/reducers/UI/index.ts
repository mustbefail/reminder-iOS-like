import { UiState, UiAction, UiActionEnum } from './types';

const initState: UiState = {
  isFormVisible: false,
  theme: 'light',
};

export default function uiReducer(state = initState, action: UiAction) {
  switch (action.type) {
    case UiActionEnum.SET_FORM_VISIBILITY:
      return { ...state, isFormVisible: action.payload.isVisible };
    case UiActionEnum.SWITCH_THEME:
      return { ...state, theme: action.payload.themeColor };
    default:
      return state;
  }
}
