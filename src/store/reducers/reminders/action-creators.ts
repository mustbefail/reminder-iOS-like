import axios from 'axios';
import { AppDispatch } from '../..';
import { IReminder } from '../../../models/types';
import {
  AddReminderAction,
  addRemindersFromServerAction,
  ReminderActionEnum,
  SetErrorAction,
  SetIsLoadingAction,
  SetReminderComplete,
} from './types';

export const ReminderActionCreators = {
  addReminder: (reminder: IReminder): AddReminderAction => ({
    type: ReminderActionEnum.ADD_REMINDER,
    payload: { reminder },
  }),
  addRemindersFromServer: (
    reminders: IReminder[]
  ): addRemindersFromServerAction => ({
    type: ReminderActionEnum.ADD_FROM_SERVER,
    payload: { reminders },
  }),
  setError: (error: string): SetErrorAction => ({
    type: ReminderActionEnum.SET_ERROR,
    payload: { error },
  }),
  SetReminderComplete: (
    isComplete: boolean,
    id: string
  ): SetReminderComplete => ({
    type: ReminderActionEnum.SET_REMINDER_COMPLETE,
    payload: { isComplete, id },
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: ReminderActionEnum.SET_IS_LOADING,
    payload: { isLoading },
  }),
  loadReminders: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(ReminderActionCreators.setIsLoading(true));
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1/todos'
      );
      const normalizedReminders: IReminder[] = response.data
        .slice(0, 5)
        .map((reminder: { title: string; id: number; completed: boolean }) => {
          const { title, id, completed } = reminder;
          return { text: title, id: id.toString(), completed };
        });
      dispatch(
        ReminderActionCreators.addRemindersFromServer(normalizedReminders)
      );
      dispatch(ReminderActionCreators.setIsLoading(false));
    } catch (error) {
      dispatch(ReminderActionCreators.setError('Ошибка загрузки'));
    }
  },
};
