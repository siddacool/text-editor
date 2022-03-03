<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import type { Block, BlockContext } from '~/types';
  export let block: Block;
  export let index: number;
  let textData = block.textData;
  let usernameInput;

  const blocks: BlockContext = getContext('blocks');

  const handleBlur = () => {
    blocks.modify(block.id, textData);
  };

  const setSelection = () => {
    usernameInput.focus();
    let sel = window.getSelection();
    sel.selectAllChildren(usernameInput);
    sel.collapseToEnd();
  };

  onMount(() => block.focus && setSelection());
</script>

<div
  class="plugin plugin-div"
  contenteditable="true"
  bind:innerHTML={textData}
  on:blur={handleBlur}
  bind:this={usernameInput}
/>
