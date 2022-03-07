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
    background-color: #fff;
    margin: 0;
    padding: 0;
    flex-direction: column;
    left: 0;
    min-width: 120px;
    overflow: auto;
    font-size: 1rem;

    :global(li) {
      padding: 6px;
      display: flex;
      cursor: pointer;
      align-items: center;

      &:hover {
        background-color: #f3f3f3;
      }
    }

    :global(.rigid) {
      padding: 4px 6px;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
    }

    :global(hr) {
      width: 100%;
      height: 1px;
      opacity: 0.4;
    }
  }
</style>
