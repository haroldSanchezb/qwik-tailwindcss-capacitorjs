export {};

declare global {
  interface TasksStore {
    tasks: Array<Task>;
  }

  interface Task {
    value: string;
    status: 'active' | 'completed' | 'deleted' | 'initial';
  }
}