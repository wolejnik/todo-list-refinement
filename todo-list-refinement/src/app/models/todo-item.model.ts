export interface ToDoItem {
  id: string;
  title: string;
  desc?: string;
  status: 'todo' | 'inProgress' | 'done'
}
