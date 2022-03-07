<script lang="ts">
  import type { IBlock } from '~/types';
  import MoreOptions from './MoreOptions.svelte';

  export let stopDrag;
  export let startDrag;
  export let onUpdate;
  export let block: IBlock;
</script>

<div class="options-menu">
  <div
    class="handle"
    on:mousedown={startDrag}
    on:touchstart={startDrag}
    on:mouseup={stopDrag}
    on:touchend={stopDrag}
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  </div>

  <MoreOptions {onUpdate} {block} />
</div>

<style lang="scss">
  .options-menu {
    position: absolute;
    left: -42px;
    margin-top: 4px;
    display: flex;

    svg {
      opacity: 0.5;
    }
  }

  .handle {
    cursor: grab;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;

    &:hover {
      svg {
        opacity: 1;
      }
    }

    svg {
      width: 17px;
      height: 17px;
    }
  }
</style>
