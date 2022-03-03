<script lang="ts">
  let state = ['Hello', 'Goodby', 'Hi'];

  const onChange = (val: string[]) => {
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
