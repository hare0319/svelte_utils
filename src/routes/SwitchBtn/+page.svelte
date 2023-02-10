<script lang="ts">
  import { fade } from "svelte/transition";
  import SwitchBtn from "$lib/components/SwitchBtn.svelte";
  let checked: boolean = false;
</script>

<h1>Switch Button</h1>
<p>
  This is an example of switch button, which controls displaying some text with
  transitions
</p>

<SwitchBtn label="Raw Data:" bind:checked />
{#if checked}
  <p transition:fade>Displaying Raw Data</p>
{/if}
