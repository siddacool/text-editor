<script lang="ts">
  import { setContext } from 'svelte';
  import { createBlocks } from '~/contexts/blocks';
  import AddNewBlock from './AddNewBlock.svelte';
  import ContentBlock from './ContentBlock.svelte';

  export let value = [];
  export let onChange = (val) => {};

  const blocks = createBlocks(value, onChange);

  setContext('blocks', blocks);

  const onSave = (val) => {
    onChange(val);
  };
</script>

<div class="text-editor">
  {#each $blocks as block, index}
    <ContentBlock html={block} {index} />
  {/each}
  <br />

  <AddNewBlock />

  <button on:click={() => onSave($blocks)}>Save</button>

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
