<script lang="ts">
  import { PluginDiv, Plugins } from '~/Plugins';
  import type { IBlock } from '~/types';
  import OptionsMenu from './OptionsMenu.svelte';
  export let block: IBlock;
  export let stopDrag;
  export let startDrag;
  export let index: number;
  export let onUpdate;

  $: PluginPull = Plugins.find((p) => p.id === block.type) || PluginDiv;
</script>

<div class="block">
  <OptionsMenu {stopDrag} {startDrag} {block} {onUpdate} />

  <svelte:component this={PluginPull.component} {block} {index} />
</div>
