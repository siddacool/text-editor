<script lang="ts">
  import Dropdown from '$lib/Dropdown.svelte';
  import { getContext } from 'svelte';
  import type { IBlock, IBlockContext } from '~/types';
  import { Plugins } from '~/Plugins';

  export let onUpdate;
  export let block: IBlock;

  const blocks: IBlockContext = getContext('blocks');

  let moreMenuOpen = false;

  const handleMoreMenuClose = () => {
    moreMenuOpen = false;
  };

  const handleMoreMenuOpen = () => {
    moreMenuOpen = true;
  };

  const handleRemove = () => {
    handleMoreMenuClose();
    blocks.remove(block.id);
    onUpdate();
  };

  const handleTurnInto = (id, type) => {
    handleMoreMenuClose();
    blocks.turnInto(id, type);
    onUpdate();
  };
</script>

<button class="more" on:click={handleMoreMenuOpen}>
  <svg
    class="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    /></svg
  >
</button>

<section>
  <Dropdown open={moreMenuOpen} onClose={handleMoreMenuClose} class="menu">
    <li on:click={handleRemove}>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg> Remove
    </li>
    <hr />
    <div class="rigid">Turn into</div>
    {#each Plugins.filter((p) => p.id !== block.type) as { id, name, description }}
      <li on:click={() => handleTurnInto(block.id, id)} class="plugins">
        <div class="icon">{name}</div>
        <div class="description">{description}</div>
      </li>
    {/each}
  </Dropdown>
</section>

<style lang="scss">
  .more {
    background-color: transparent;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      svg {
        opacity: 1;
      }
    }

    svg {
      opacity: 0.5;
      width: 17px;
      height: 17px;
    }
  }

  section {
    svg {
      width: 17px;
      height: 17px;
    }

    :global(.menu) {
      width: 260px;
      font-size: 0.9rem;
    }

    :global(.menu svg) {
      margin-right: 4px;
    }

    .plugins {
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
        text-align: left;
      }
    }
  }
</style>
