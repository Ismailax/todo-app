export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  onUpdate: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
