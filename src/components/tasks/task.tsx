import { component$ } from '@builder.io/qwik';
import { v4 as uuidv4 } from 'uuid';

export default component$((props: Task) => {

  const identify = uuidv4();

  return (
    <div class="flex flex-row">
      <div class="checkbox">
        <input id={identify} type="checkbox" />
      </div>
      <label htmlFor={identify}>{props.value}</label>
    </div>
  );
});
