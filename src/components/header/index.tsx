import { component$ } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const head = useDocumentHead();

  return (
    <header class="container mx-auto flex items-center justify-center py-3 mb-5 bg-orange-200">
      <h1 class="text-slate-600">{head.title}</h1>
    </header>
  )
});
