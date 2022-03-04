import { writable } from 'svelte/store';

export function createAddBlockPosition() {
  const { subscribe, set } = writable(null);

  return {
    subscribe,
    forceSet: (index) => set(index),
  };
}
