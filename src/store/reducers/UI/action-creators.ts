import { UiActionEnum, setFormVisibleAction } from './types';

export const UiActionCreators = {
  setFormVisibility: (isVisible: boolean): setFormVisibleAction => ({
    type: UiActionEnum.SET_FORM_VISIBILITY,
    payload: { isVisible },
  }),
};
