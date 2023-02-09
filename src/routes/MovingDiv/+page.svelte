<script lang="ts">
  import MovingDiv from "$lib/components/movingDiv.svelte";
  import Plus from "$lib/icons/plus.svelte";
  import Trash from "$lib/icons/trash.svelte";
</script>

<h1>Moving Div</h1>
<p>Click and drag to move following icons:</p>

<MovingDiv>
  <Plus />
</MovingDiv>

<MovingDiv>
  <Trash />
</MovingDiv>
