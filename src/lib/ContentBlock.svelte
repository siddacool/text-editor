<script lang="ts">
  import { blocks } from '~/stores/blocks';
  export let html: string;
  export let index: number;

  const handleBlur = () => {
    blocks.modify(index, html);
  };
</script>

<div class="content-block" contenteditable="true" bind:innerHTML={html} on:blur={handleBlur} />
