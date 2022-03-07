<script lang="ts">
  import type { IAddBlockPositionContext, IBlockContext } from '~/types';
  import { getContext, onMount } from 'svelte';
  import Menu from './Menu.svelte';
  const blocks: IBlockContext = getContext('blocks');
  const addBlockPosition: IAddBlockPositionContext = getContext('addBlockPosition');
  export let onAdd;
  let inputText = '';
  let showDropDown = false;
  let usernameInput;

  const handleAdd = (id) => {
    showDropDown = false;
    inputText = '';

    blocks.add(id, { focus: true, at: $addBlockPosition });
    onAdd();
    addBlockPosition.forceSet(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === '/') {
      showDropDown = true;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      blocks.add('plugin-div', { focus: true, at: $addBlockPosition, textData: inputText });
      onAdd();
      inputText = '';
      addBlockPosition.forceSet(null);
    }
  };

  const handleCloseMenu = () => {
    showDropDown = false;
  };

  onMount(() => usernameInput.focus());
</script>

<div>
  <Menu {handleAdd} {showDropDown} onClose={handleCloseMenu} />
  {#if !showDropDown}
    <input
      type="text"
      placeholder="type / for more options"
      bind:value={inputText}
      bind:this={usernameInput}
      on:keydown={handleKeyDown}
    />
  {/if}
</div>

<style lang="scss">
  input {
    font-size: inherit;
  }
</style>
