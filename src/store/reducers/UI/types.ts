export enum UiActionEnum {
  SET_FORM_VISIBILITY = 'SET_FORM_VISIBILITY',
  SWITCH_THEME = 'SWITCH_THEME',
}

export interface UiState {
  isFormVisible: boolean;
  theme: string;
}

export interface setFormVisibleAction {
  type: UiActionEnum.SET_FORM_VISIBILITY;
  payload: { isVisible: boolean };
}

export interface switchThemeAction {
  type: UiActionEnum.SWITCH_THEME;
  payload: { themeColor: string };
}

export type UiAction = setFormVisibleAction | switchThemeAction;
