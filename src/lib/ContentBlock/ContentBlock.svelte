<script lang="ts">
  import { PluginDiv, Plugins } from '~/Plugins';
  import type { IBlock } from '~/types';
  import OptionsMenu from './OptionsMenu.svelte';
  export let block: IBlock;
  export let stopDrag;
  export let startDrag;
  export let index: number;
  const { type } = block;
  const { component } = Plugins.find((p) => p.id === type) || PluginDiv;
</script>

<div class="block">
  <OptionsMenu {stopDrag} {startDrag} />

  <svelte:component this={component} {block} {index} />
</div>

<style lang="scss">
  .block {
    &.isActive {
      background-color: aliceblue;
    }
  }
</style>
