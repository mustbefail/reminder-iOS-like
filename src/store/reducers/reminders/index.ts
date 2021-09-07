import { IReminder } from '../../../models/types';
import { ReminderAciton, ReminderActionEnum, RemindersState } from './types';

const initState: RemindersState = {
  reminders: [] as IReminder[],
  remindersAmount: 0,
  error: '',
  isLoading: false,
};

export default function remindersReducer(
  state = initState,
  action: ReminderAciton
): RemindersState {
  switch (action.type) {
    case ReminderActionEnum.ADD_REMINDER: {
      const { reminder } = action.payload;
      const newState = {
        ...state,
        reminders: [...state.reminders, reminder],
      };
      return { ...newState, remindersAmount: newState.reminders.length };
    }
    case ReminderActionEnum.ADD_FROM_SERVER: {
      const { reminders } = action.payload;
      const newState = {
        ...state,
        reminders: [...state.reminders, ...reminders],
      };
      return { ...newState, remindersAmount: newState.reminders.length };
    }
    case ReminderActionEnum.SET_ERROR: {
      const { error } = action.payload;
      return { ...state, error: error, isLoading: false };
    }
    case ReminderActionEnum.SET_REMINDER_COMPLETE: {
      const { reminders } = state;
      const { isComplete, id } = action.payload;
      const reminderIndex = reminders.findIndex(
        (reminder) => reminder.id === id
      );
      const reminderToChange = reminders[reminderIndex];
      if (reminderToChange) {
        const newReminder = { ...reminderToChange, completed: isComplete };
        reminders[reminderIndex] = newReminder;
        return { ...state, reminders: [...state.reminders] };
      }
      return { ...state };
    }
    case ReminderActionEnum.SET_IS_LOADING: {
      const { isLoading } = action.payload;
      return { ...state, isLoading: isLoading };
    }
    default:
      return state;
  }
}
