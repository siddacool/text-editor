<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import type { IBlock, IBlockContext } from '~/types';
  export let block: IBlock;
  export let index: number;
  let textData = block.textData;
  let usernameInput;

  const blocks: IBlockContext = getContext('blocks');
  const addBlockPosition = getContext('addBlockPosition');

  const handleBlur = () => {
    blocks.modify(block.id, textData);
  };

  const setSelection = () => {
    usernameInput.focus();
    let sel = window.getSelection();
    sel.selectAllChildren(usernameInput);
    sel.collapseToEnd();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      }

      usernameInput.blur();
      addBlockPosition.forceSet(index);
    }
  };

  onMount(() => block.focus && setSelection());
</script>

<div
  class="plugin plugin-div"
  contenteditable="true"
  bind:innerHTML={textData}
  on:blur={handleBlur}
  bind:this={usernameInput}
  on:keydown={handleKeyDown}
/>

<style>
  .plugin-div {
    margin-bottom: 10px;
  }
</style>
