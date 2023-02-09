<script lang="ts">
  import { onMount } from "svelte";
  import { spring, type Spring } from "svelte/motion";

  //   let coords = spring<{ x: number; y: number }>({}, {
  //     stiffness: 0.1,
  //     damping: 0.25,
  //   });
  type Coord = {
    x: number;
    y: number;
  };
  let coords: Spring<Coord>;
  let allowMove = false;
  let target: HTMLDivElement;
  let initCoord: Coord;

  onMount(() => {
    const { left, top } = target.getBoundingClientRect();
    initCoord = {
      x: left + target.offsetWidth / 2,
      y: top + target.offsetHeight / 2,
    };

    coords = spring({ ...initCoord }, { stiffness: 0.1, damping: 0.25 });

    coords.set(initCoord);
  });
</script>

<div
  style="
  transform: {`translate(${$coords?.x - initCoord?.x}px, ${
    $coords?.y - initCoord?.y
  }px)`}"
  bind:this={target}
  on:mousedown={() => {
    allowMove = !allowMove;
  }}
>
  <slot />
</div>

<svelte:window
  on:mousemove={(e) => {
    if (!allowMove) return;
    coords.set({ x: e.clientX, y: e.clientY });
  }}
/>

<style>
  div {
    width: 50px;
    height: 50px;
    color: aqua;
    stroke-width: 2pt;
    position: relative;
  }
</style>
