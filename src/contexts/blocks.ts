import { writable } from 'svelte/store';
import type { BlockState } from '~/types';
import { formatStringToHTML } from '~/utils';

export function createBlocks(initialState: BlockState, onChange: StateOnChange) {
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
