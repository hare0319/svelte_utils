<script lang="ts">
  import { onMount } from "svelte";
  import type { PageServerData } from "./$types";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import SearchBox from "$lib/components/SearchBox.svelte";

  export let data: PageServerData;

  onMount(() => {
    if (data.itemList?.length < 1) data.itemList = ["Test"];
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Dropdown hintList={data.itemList} />
<SearchBox hintList={data.itemList} />
