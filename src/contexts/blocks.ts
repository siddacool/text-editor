import { writable } from 'svelte/store';
import type { BlockState } from '~/types';
import { formatStringToHTML } from '~/utils';

export function createBlocks(initialState: BlockState) {
  const { subscribe, update, set } = writable(initialState);

  return {
    subscribe,
    forceSet: (data) => set(data),
    add: (
      type: string,
      config: {
        textData?: string;
        focus?: boolean;
      },
    ) => {
      const { textData = 'yo', focus = false } = config || {};

      return update((s) => {
        const newS = s.map((s) => ({ ...s, focus: false }));

        newS.push({
          id: `${Date.now()}`,
          type,
          textData,
          focus,
        });

        return newS;
      });
    },
    remove: (index: number) => update((s) => s.filter((sOpt, i) => i !== index)),
    modify: (id: string, val: string) =>
      update((s) => {
        return s.map((sOpt) => {
          if (sOpt.id !== id) {
            return sOpt;
          }

          sOpt.textData = formatStringToHTML(val);

          return sOpt;
        });
      }),
  };
}
