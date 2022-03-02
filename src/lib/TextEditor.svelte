<script lang="ts">
  import { blocks, blocksJson } from '~/stores/blocks';
  import AddNewBlock from './AddNewBlock.svelte';
  import ContentBlock from './ContentBlock.svelte';
</script>

<div class="text-editor">
  {#each $blocks as block, index}
    <ContentBlock html={block} {index} />
  {/each}
  <br />

  <AddNewBlock />

  <br />
  <br />
  <div>
    Preview
    <div>{$blocksJson}</div>
  </div>
</div>

<style lang="scss">
  .text-editor {
    display: block;
    width: 100%;
    padding: 16px;
    min-height: 400px;
    background-color: aliceblue;

    div {
      background-color: red;
    }
  }
</style>
