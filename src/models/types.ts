export interface ICategory {
  id: string;
  name: string;
  amount: number;
  iconColor: string;
  iconName: string;
}

export interface IList extends ICategory {}

export interface IReminder {
  id: string;
  text: string;
  list: string;
  completed: boolean;
}
