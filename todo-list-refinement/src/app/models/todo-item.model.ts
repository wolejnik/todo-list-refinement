export interface ToDoItem {
  id: string;
  title: string;
  desc?: string;
  isToDo: boolean;
  isProgress: boolean;
  isDone: boolean;
}
