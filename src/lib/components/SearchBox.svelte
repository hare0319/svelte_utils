<script lang="ts">
  import { onMount } from "svelte";

  export let hintList: string[];
  let showDrop = false;
  let inputBox: HTMLInputElement;
  let inputVal: string = "";
  let transY = 0;

  $: filteredList = hintList.filter((v) => {
    if (inputVal.length < 1) return true;
    let lastOcc = -1;
    const cleanWord = v.trim().toLocaleLowerCase();
    for (let index = 0; index < inputVal.length; index++) {
      const char = inputVal.charAt(index).toLocaleLowerCase();
      const occIndex = cleanWord.indexOf(char, lastOcc + 1);
      if (occIndex === -1) return false;
      lastOcc = occIndex;
    }
    return true;
  });

  function lossFocus(node: HTMLElement) {
    const handleClick = (event: Event) => {
      if (!node.contains(event.target as HTMLElement)) {
        node.dispatchEvent(new CustomEvent("abort"));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy: () => {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }

  const handle_dropdown = () => {
    showDrop = true;
  };

  const handle_hide = () => {
    if (document.activeElement?.isSameNode(inputBox)) return;
    showDrop = false;
  };

  const handle_select = (name: string) => {
    inputVal = name;
    showDrop = false;
  };

  onMount(() => {
    const { height } = inputBox.getBoundingClientRect();
    transY = height;
  });
</script>

<div class="dropdown">
  <input
    type="text"
    placeholder="Input Text"
    bind:this={inputBox}
    bind:value={inputVal}
    on:focus={handle_dropdown}
  />

  {#if showDrop}
    <div
      class="dropdownContent"
      style:top={`${transY + 5}px`}
      use:lossFocus
      on:abort={handle_hide}
    >
      <ul>
        {#each filteredList as hint}
          <!-- <li on:focus={handle_select}>{hint}</li> -->
          <li>
            <button
              on:click={() => {
                handle_select(hint);
              }}>{hint}</button
            >
          </li>
        {/each}
      </ul>
    </div>
  {/if}
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
    inset: 0px auto auto 0px;
    border: 1px black solid;
    background-color: white;
    max-height: 15rem;
    overflow-y: scroll;
  }
  ul {
    list-style-type: none;
    padding: 0rem;
    margin: 0rem;
  }
  li {
    padding: 0.2rem 0.5rem;
  }
  li:hover {
    background-color: rgb(56, 114, 239);
  }
  input {
    position: relative;
  }
  button {
    background-color: transparent;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
  }
</style>
