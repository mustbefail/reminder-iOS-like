import { ReminderActionCreators } from './reminders/action-creators';
import { UiActionCreators } from './UI/action-creators';

export const allActionCreators = {
  ...UiActionCreators,
  ...ReminderActionCreators,
};
