<script lang="ts">
  import { dndzone } from 'svelte-dnd-action';
  import type { BlockState, StateOnChange } from '~/types';
  import { setContext, onDestroy } from 'svelte';
  import { createBlocks } from '~/contexts/blocks';
  import AddNewBlock from './AddNewBlock.svelte';
  import ContentBlock from './ContentBlock.svelte';
  import { createAddBlockPosition } from '~/contexts/add-block-position';

  export let value: BlockState = [];
  export let onChange: StateOnChange = (val) => {};

  const blocks = createBlocks(value);
  const addBlockPosition = createAddBlockPosition();

  setContext('blocks', blocks);
  setContext('addBlockPosition', addBlockPosition);

  const unsubscribe = blocks.subscribe((data) => {
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

  function handleAddAction() {
    console.log('yo');

    items = [...$blocks];
  }

  const startDrag = () => {
    dragDisabled = false;
  };

  const stopDrag = () => {
    dragDisabled = true;
  };
</script>

<div class="text-editor">
  <section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each items as block, index (block.id)}
      <ContentBlock {block} {startDrag} {stopDrag} {index} />

      {#if $addBlockPosition === null && index === items.length - 1}
        <br />
        <AddNewBlock onAdd={handleAddAction} />
      {:else if ($addBlockPosition || $addBlockPosition === 0) && $addBlockPosition === index}
        <br />
        <AddNewBlock onAdd={handleAddAction} />
      {/if}
    {/each}
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
    width: calc(100% - 40px);
    padding: 16px;
    min-height: 400px;
    background-color: aliceblue;
    max-width: 800px;
    margin-left: auto;
    position: relative;

    @media (min-width: 1000px) {
      margin-right: auto;
    }
  }

  section {
    position: relative;
  }
</style>
