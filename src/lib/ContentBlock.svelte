<script lang="ts">
  import { PluginDiv, Plugins } from '~/Plugins';
  import type { Block } from '~/types';
  export let block: Block;
  export let stopDrag;
  export let startDrag;
  export let index: number;
  const { type } = block;
  const { component } = Plugins.find((p) => p.id === type) || PluginDiv;
</script>

<div class="block">
  <div class="options">
    <div
      class="handle"
      on:mousedown={startDrag}
      on:touchstart={startDrag}
      on:mouseup={stopDrag}
      on:touchend={stopDrag}
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        /></svg
      >
    </div>
  </div>

  <svelte:component this={component} {block} {index} />
</div>

<style lang="scss">
  .options {
    position: absolute;
    left: -26px;
    margin-top: 4px;
    z-index: 400;
    display: flex;
  }

  .handle {
    cursor: grab;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;

    svg {
      width: 17px;
      height: 17px;
    }
  }
</style>
