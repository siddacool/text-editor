<script lang="ts">
  import { dndzone } from 'svelte-dnd-action';
  import type { BlockState, StateOnChange } from '~/types';
  import { setContext, onDestroy } from 'svelte';
  import { createBlocks } from '~/contexts/blocks';
  import NewBlock from './NewBlock';
  import ContentBlock from './ContentBlock';
  import { createAddBlockPosition } from '~/contexts/add-block-position';

  export let value: BlockState = [];
  export let onChange: StateOnChange = (val) => {};

  const blocks = createBlocks(value);
  const addBlockPosition = createAddBlockPosition();

  setContext('blocks', blocks);
  setContext('addBlockPosition', addBlockPosition);

  const unsubscribe = blocks.subscribe((data) => {
    console.log(data);

    onChange(data);
  });

  onDestroy(unsubscribe);

  const flipDurationMs = 300;

  let items = $blocks;

  let dragDisabled = true;

  function handleDndConsider(e) {
    items = e.detail.items;
  }

  function handleDndFinalize(e) {
    items = e.detail.items;

    blocks.forceSet(items);

    // Ensure dragging is stopped on drag finish
    dragDisabled = true;
  }

  function handleBlocksUpdate() {
    console.log('yo');

    items = [...$blocks];
  }

  const startDrag = () => {
    dragDisabled = false;
  };

  const stopDrag = () => {
    dragDisabled = true;
  };

  $: {
    console.log(items);
  }
</script>

<div class="text-editor">
  <section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each items as block, index (block.id)}
      <ContentBlock {block} {startDrag} {stopDrag} {index} onUpdate={handleBlocksUpdate} />

      {#if $addBlockPosition === null && index === items.length - 1}
        <NewBlock onUpdate={handleBlocksUpdate} />
      {:else if ($addBlockPosition || $addBlockPosition === 0) && $addBlockPosition === index}
        <NewBlock onUpdate={handleBlocksUpdate} />
      {/if}
    {/each}

    {#if !items.length}
      <NewBlock onUpdate={handleBlocksUpdate} />
    {/if}
  </section>

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
    background-color: #fff;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    height: calc(100vh - 60px);
    margin-top: 30px;
    overflow: auto;
    z-index: 100;
    padding-left: 50px;
    border-radius: 10px;
    border: 1px solid #bcbcbc;
  }

  section {
    position: relative;
    outline: none !important;
  }
</style>
