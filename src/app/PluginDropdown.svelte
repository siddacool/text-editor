<script lang="ts">
  import Dropdown from '$lib/Dropdown.svelte';
  export let plugins;
  export let handleAdd;
  export let showDropDown;
  export let onClose;
</script>

<Dropdown class="plugin-dropdown" open={showDropDown} {onClose}>
  {#each plugins as { id, name, description }}
    <li on:click={() => handleAdd(id)}>
      <div class="icon">{name}</div>
      <div class="description">{description}</div>
    </li>
  {/each}
</Dropdown>

<style lang="scss">
  .plugin-dropdown {
    li {
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
