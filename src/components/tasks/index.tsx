import {
  component$,
  useStore,
  useContextProvider,
  createContext,
} from '@builder.io/qwik';
import Task from './task';

export const TasksContext = createContext<TasksStore>('Tasks');

export default component$(() => {

  const state = useStore<TasksStore>({
    tasks: [{
      status: 'initial',
      value: '',
    }],
  });

  useContextProvider(TasksContext, state);

  return (
    <div class="flex flex-col">
      {
        state.tasks.map((task) => {
          return <Task {...task} />
        })
      }
    </div>
  )
});
