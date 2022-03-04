<script lang="ts">
  import { dndzone } from 'svelte-dnd-action';
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

  const flipDurationMs = 300;

  let items = $blocks;

  function handleDndConsider(e) {
    items = e.detail.items;
  }

  function handleDndFinalize(e) {
    items = e.detail.items;

    blocks.forceSet(items);
  }

  function handleAddAction() {
    console.log('yo');

    items = [...$blocks];
  }
</script>

<div class="text-editor">
  <section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each items as block (block.id)}
      <ContentBlock {block} />
    {/each}
  </section>
  <br />

  <AddNewBlock onAdd={handleAddAction} />

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
