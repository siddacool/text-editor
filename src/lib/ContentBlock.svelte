<script lang="ts">
  import { PluginDiv, Plugins } from '~/Plugins';
  import type { Block } from '~/types';
  export let block: Block;
  export let stopDrag;
  export let startDrag;
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
    />
  </div>

  <svelte:component this={component} {block} />
</div>

<style lang="scss">
  .options {
    position: absolute;
    left: -37px;
    margin-top: 4px;
  }

  .handle {
    cursor: grab;
    width: 1em;
    height: 0.5em;
    background-color: grey;
  }
</style>
