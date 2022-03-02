<script lang="ts">
  import { blocks } from '~/stores/blocks';
</script>

<button on:click={() => blocks.add('Item')}>Add New</button>

<style>
</style>
