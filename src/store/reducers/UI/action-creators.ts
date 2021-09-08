import { UiActionEnum, setFormVisibleAction, switchThemeAction } from './types';

export const UiActionCreators = {
  setFormVisibility: (isVisible: boolean): setFormVisibleAction => ({
    type: UiActionEnum.SET_FORM_VISIBILITY,
    payload: { isVisible },
  }),
  switchTheme: (themeColor: string): switchThemeAction => {
    localStorage.setItem('theme', themeColor);
    return {
      type: UiActionEnum.SWITCH_THEME,
      payload: { themeColor },
    };
  },
};
