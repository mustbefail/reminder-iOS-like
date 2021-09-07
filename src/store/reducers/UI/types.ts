export enum UiActionEnum {
  SET_FORM_VISIBILITY = 'SET_FORM_VISIBILITY',
}

export interface UiState {
  isFormVisible: boolean;
}

export interface setFormVisibleAction {
  type: UiActionEnum.SET_FORM_VISIBILITY;
  payload: { isVisible: boolean };
}
