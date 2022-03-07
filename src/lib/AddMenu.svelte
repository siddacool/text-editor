<script lang="ts">
  import { Plugins } from '~/Plugins';
  export let handleAdd;
</script>

<ul class="menu">
  {#each Plugins as { id, name, description }}
    <li on:click={() => handleAdd(id)}>
      <div class="icon">{name}</div>
      <div class="description">{description}</div>
    </li>
  {/each}
</ul>

<style lang="scss">
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
