<script lang="ts">
  import type { BlockContext } from '~/types';
  import { getContext, onMount } from 'svelte';
  import { Plugins } from '~/Plugins';
  const blocks: BlockContext = getContext('blocks');
  const addBlockPosition = getContext('addBlockPosition');
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

  onMount(() => usernameInput.focus());
</script>

<div>
  {#if showDropDown}
    <ul class="menu">
      {#each Plugins as { id, name, description }}
        <li on:click={() => handleAdd(id)}>
          <div class="icon">{name}</div>
          <div class="description">{description}</div>
        </li>
      {/each}
    </ul>
  {:else}
    <input
      type="text"
      placeholder="type / for more options"
      bind:value={inputText}
      bind:this={usernameInput}
      on:keydown={handleKeyDown}
    />
  {/if}
</div>

<style type="scss">
  input {
    font-size: inherit;
  }

  .menu {
    display: flex;
    border: 1px solid #bcbcbc;
    max-width: 300px;
    border-radius: 6px;
    overflow: auto;
    max-height: 300px;
    background-color: #fff;
    margin: 0;
    padding: 0;
    flex-direction: column;
    margin-top: 8px;

    li {
      padding: 6px;
      display: flex;
      cursor: pointer;

      &:hover {
        background-color: #f3f3f3;
      }

      .icon {
        background-color: #b7b7b7;
        height: 40px;
        width: 40px;
        display: flex;
        margin-right: 4px;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
      }

      .description {
        font-size: 0.9rem;
        flex: 1;
      }
    }
  }
</style>
