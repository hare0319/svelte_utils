<script lang="ts">
  export let hintList: string[];
  let showDrop = false;
  let transY = 0;
  const handle_dropdown = () => {
    showDrop = !showDrop;
  };
</script>

<div class="dropdown">
  <button on:click={handle_dropdown} bind:clientHeight={transY}
    >Show Content</button
  >

  <div class:showDrop class="dropdownContent" style:top={`${transY + 5}px`}>
    <ul>
      {#each hintList as hint}
        <li>{hint}</li>
      {/each}
    </ul>
  </div>
</div>

<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quas incidunt
  rem quos harum similique quam sequi, laborum voluptatum nam repudiandae
  numquam nemo obcaecati deleniti vel perspiciatis enim porro qui.
</p>

<style>
  .dropdown {
    position: relative;
  }
  .dropdownContent {
    position: absolute;
    border: 1px black solid;
    background-color: gray;
    max-height: 10rem;
    overflow-y: scroll;
    inset: 0px auto auto 0px;
    display: none;
  }
  .showDrop {
    display: block;
  }
  ul {
    list-style-type: none;
    padding: 0rem;
    margin: 0rem;
  }
  li {
    padding: 0.5rem 1rem;
  }
  button {
    position: relative;
  }
</style>
