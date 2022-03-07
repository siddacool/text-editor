<script lang="ts">
  import { Plugins } from '~/Plugins';
  import PluginDropdown from '../PluginDropdown.svelte';
  export let handleAdd;
  export let showDropDown;
  export let onClose;
</script>

<PluginDropdown {handleAdd} {showDropDown} {onClose} plugins={Plugins} />
