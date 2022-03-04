<script lang="ts">
  import { PluginDiv, Plugins } from '~/Plugins';
  import type { Block } from '~/types';
  export let block: Block;
  const { type } = block;
  const { component } = Plugins.find((p) => p.id === type) || PluginDiv;
</script>

<svelte:component this={component} {block} />
