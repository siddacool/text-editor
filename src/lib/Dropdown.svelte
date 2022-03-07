<script lang="ts">
  import { clickOutside } from '~/directives/clickOutside';
  export let props = {};
  export let open = false;
  export let onClose;
  let clazz = '';
  export { clazz as class };
  let baseDivRef;

  function handleClickOutside() {
    onClose();
  }
</script>

{#if open}
  <div bind:this={baseDivRef}>
    <ul
      class={`dropdown ${clazz || ''}`}
      {...props}
      use:clickOutside
      on:click_outside={handleClickOutside}
    >
      <slot />
    </ul>
  </div>
{/if}

<style lang="scss">
  div {
    position: relative;
  }

  .dropdown {
    position: absolute;
    display: flex;
    border: 1px solid #bcbcbc;
    max-width: 300px;
    border-radius: 6px;
    overflow: auto;
    max-height: 300px;
    min-height: 200px;
    background-color: #fff;
    margin: 0;
    padding: 0;
    flex-direction: column;
    margin-top: 8px;
    left: 0;

    :global(li) {
      padding: 6px;
      display: flex;
      cursor: pointer;

      &:hover {
        background-color: #f3f3f3;
      }
    }
  }
</style>
