{#await import('$lib/TextEditor.svelte') then c}
  <svelte:component this={c.default} />
{/await}

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(body) {
    margin: 0;
  }
</style>
