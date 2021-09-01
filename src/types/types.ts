export interface IList {
  listName: string;
  listId: string;
}

export interface ITask {
  taskName: string;
  taskId: string;
  parentList: string;
}

export interface IFormData {
  name: string;
  id: string;
  currentList?: string;
}
