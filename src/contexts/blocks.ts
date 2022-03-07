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
        at?: number;
      },
    ) => {
      const { textData = 'yo', focus = false, at = null } = config || {};

      return update((s) => {
        const newS = s.map((s) => ({ ...s, focus: false }));

        if (at || at === 0) {
          newS.splice(at + 1, 0, {
            id: `${Date.now()}`,
            type,
            textData,
            focus,
          });
        } else {
          newS.push({
            id: `${Date.now()}`,
            type,
            textData,
            focus,
          });
        }

        return newS;
      });
    },
    remove: (id: string) => update((s) => s.filter((sOpt) => sOpt.id !== id)),
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
    turnInto: (id: string, type: string) =>
      update((s) => {
        return s.map((sOpt) => {
          if (sOpt.id !== id) {
            return sOpt;
          }

          sOpt.type = type;

          return sOpt;
        });
      }),
    duplicate: (blockId: string) => {
      return update((s) => {
        const newS = s.map((s) => ({ ...s, focus: false }));
        const findToCopy = newS.find((s) => s.id === blockId);

        if (findToCopy) {
          const at = newS.findIndex((s) => s.id === blockId);
          const { textData, type } = findToCopy;

          newS.splice(at + 1, 0, {
            id: `${Date.now()}`,
            type,
            textData,
            focus: true,
          });
        }

        return newS;
      });
    },
  };
}
