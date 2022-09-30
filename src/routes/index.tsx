import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Task from '~/components/tasks';

export default component$(() => {
  return (
    <Task />
  );
});

export const head: DocumentHead = {
  title: 'My Qwik Todo',
};
