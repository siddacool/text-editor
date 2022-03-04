<script lang="ts">
  import type { BlockState } from '~/types';

  let state: BlockState = [
    {
      id: '1',
      type: 'plugin-div',
      textData: 'yyyy',
    },
  ];

  const onChange = (val: BlockState) => {
    state = [...val];
  };
</script>

{#await import('$lib/TextEditor.svelte') then c}
  <svelte:component this={c.default} value={state} {onChange} />
{/await}

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(body) {
    margin: 0;
    font-size: 1.2rem;
    min-height: 100vh;
    background-color: #f3f3f3;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }
</style>
