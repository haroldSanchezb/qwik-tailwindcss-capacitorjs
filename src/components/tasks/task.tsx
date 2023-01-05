import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { v4 as uuidv4 } from 'uuid';
import styles from './task.scss';

export default component$((props: Task) => {
  useStylesScoped$(styles);
  const identify = uuidv4();
  const isChecked = props.status === 'completed';

  return (
    <div class="flex flex-row">
      <div class={`checkbox ${isChecked ? 'checkbox--checked': ''}`}>
        <input id={identify} type="checkbox" checked={isChecked}/>
      </div>
      <label htmlFor={identify}>{props.value}</label>
    </div>
  );
});
