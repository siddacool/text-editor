<script lang="ts">
  import { getContext } from 'svelte';
  export let html: string;
  export let index: number;

  const blocks = getContext('blocks');

  const handleBlur = () => {
    blocks.modify(index, html);
  };
</script>

<div class="content-block" contenteditable="true" bind:innerHTML={html} on:blur={handleBlur} />
