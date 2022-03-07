<script lang="ts">
  export let stopDrag;
  export let startDrag;
</script>

<div class="options-menu">
  <div
    class="handle"
    on:mousedown={startDrag}
    on:touchstart={startDrag}
    on:mouseup={stopDrag}
    on:touchend={stopDrag}
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  </div>

  <button class="more">
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
</div>

<style lang="scss">
  .options-menu {
    position: absolute;
    left: -42px;
    margin-top: 4px;
    z-index: 400;
    display: flex;

    svg {
      opacity: 0.5;
    }
  }

  .handle {
    cursor: grab;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;

    &:hover {
      svg {
        opacity: 1;
      }
    }

    svg {
      width: 17px;
      height: 17px;
    }
  }

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
      width: 17px;
      height: 17px;
    }
  }
</style>
