<script lang="ts">
  import type { BlockContext } from '~/types';
  import { getContext } from 'svelte';
  import { Plugins } from '~/Plugins';
  const blocks: BlockContext = getContext('blocks');
  export let onAdd;

  const handleAdd = (id) => {
    blocks.add(id, { focus: true });
    onAdd();
  };
</script>

<div>
  {#each Plugins as { id, name }}
    <button on:click={() => handleAdd(id)}>{name}</button>
  {/each}
</div>

<style>
</style>
