import { IReminder } from '../../../models/types';

export enum ReminderActionEnum {
  ADD_REMINDER = 'ADD_REMINDER',
  ADD_FROM_SERVER = 'ADD_FROM_SERVER',
  SET_REMINDER_COMPLETE = 'SET_REMINDER_COMPLETE',
  SET_ERROR = 'SET_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface RemindersState {
  reminders: IReminder[];
  remindersAmount: number;
  error: string;
  isLoading: boolean;
}

export interface AddReminderAction {
  type: ReminderActionEnum.ADD_REMINDER;
  payload: { reminder: IReminder };
}

export interface addRemindersFromServerAction {
  type: ReminderActionEnum.ADD_FROM_SERVER;
  payload: { reminders: IReminder[] };
}

export interface SetErrorAction {
  type: ReminderActionEnum.SET_ERROR;
  payload: { error: string };
}

export interface SetIsLoadingAction {
  type: ReminderActionEnum.SET_IS_LOADING;
  payload: { isLoading: boolean };
}

export interface SetReminderComplete {
  type: ReminderActionEnum.SET_REMINDER_COMPLETE;
  payload: { isComplete: boolean; id: string };
}

export type ReminderAciton =
  | AddReminderAction
  | addRemindersFromServerAction
  | SetErrorAction
  | SetReminderComplete
  | SetIsLoadingAction;
