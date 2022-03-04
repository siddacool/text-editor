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

<div>
  {JSON.stringify(state)}
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(body) {
    margin: 0;
    font-size: 1.2rem;
  }
</style>
