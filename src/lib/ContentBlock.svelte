<script lang="ts">
  import { PluginDiv } from '~/Plugins';
  export let html: string;
  export let index: number;
  const { component } = PluginDiv;
</script>

<svelte:component this={component} {html} {index} />

<!-- <div class="content-block" contenteditable="true" bind:innerHTML={html} on:blur={handleBlur} /> -->
