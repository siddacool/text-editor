<script lang="ts">
  import { getContext } from 'svelte';
  const blocks = getContext('blocks');
</script>

<button on:click={() => blocks.add('Item')}>Add New</button>

<style>
</style>
