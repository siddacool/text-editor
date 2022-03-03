<script lang="ts">
  import type { BlockContext } from '~/types';
  import { getContext } from 'svelte';
  import { Plugins } from '~/Plugins';
  const blocks: BlockContext = getContext('blocks');
</script>

<div>
  {#each Plugins as { id, name }}
    <button on:click={() => blocks.add(id, { focus: true })}>{name}</button>
  {/each}
</div>

<style>
</style>
