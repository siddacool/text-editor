import { writable, derived } from 'svelte/store';
import { formatStringToHTML } from '~/utils';

const initialState = ['Hello', 'Goodby', 'Hi'];

function createBlocks() {
  const { subscribe, update } = writable(initialState);

  return {
    subscribe,
    add: (val: string) =>
      update((s) => {
        s.push(val);
        return s;
      }),
    remove: (index: number) => update((s) => s.filter((sOpt, i) => i !== index)),
    modify: (index: number, val: string) =>
      update((s) => {
        return s.map((sOpt, i) => {
          if (i !== index) {
            return sOpt;
          }

          return formatStringToHTML(val);
        });
      }),
  };
}

export const blocks = createBlocks();

export const blocksJson = derived(blocks, ($blocks) => JSON.stringify($blocks));
