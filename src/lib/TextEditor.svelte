<script lang="ts">
  import type { BlockState, StateOnChange } from '~/types';
  import { setContext, onDestroy } from 'svelte';
  import { createBlocks } from '~/contexts/blocks';
  import AddNewBlock from './AddNewBlock.svelte';
  import ContentBlock from './ContentBlock.svelte';

  export let value: BlockState = [];
  export let onChange: StateOnChange = (val) => {};

  const blocks = createBlocks(value);

  setContext('blocks', blocks);

  const unsubscribe = blocks.subscribe((data) => {
    onChange(data);
  });

  onDestroy(unsubscribe);
</script>

<div class="text-editor">
  {#each $blocks as block, index}
    <ContentBlock html={block} {index} />
  {/each}
  <br />

  <AddNewBlock />

  <br />
  <br />
  <div>
    Preview
    <div>{JSON.stringify($blocks)}</div>
  </div>
</div>

<style lang="scss">
  .text-editor {
    display: block;
    width: 100%;
    padding: 16px;
    min-height: 400px;
    background-color: aliceblue;
  }
</style>
