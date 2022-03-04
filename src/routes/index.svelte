<script lang="ts">
  import type { BlockState } from '~/types';

  let state: BlockState = [
    {
      id: '1',
      type: 'plugin-div',
      textData: 'yyyy',
    },
    {
      id: '2',
      type: 'plugin-div',
      textData: 'afawfawf',
    },
    {
      id: '3',
      type: 'plugin-div',
      textData: 'yawfawfawyyy',
    },
    {
      id: '4',
      type: 'plugin-div',
      textData: 'yawfawfyyy',
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
  }
</style>
