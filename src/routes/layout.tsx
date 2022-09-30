import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header';

export default component$(() => {
  return (
    <>
      <Header />
      <main class="container mx-auto">
        <section class="container mx-0 mb-2">
          <Slot />
        </section>
      </main>
    </>
  );
});
