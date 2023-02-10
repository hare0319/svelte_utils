<script lang="ts">
  export let label: string;
  export let checked = false;
</script>

<div class="container">
  <p class="label">{label}</p>

  <label class="switch">
    <input type="checkbox" bind:checked />
    <span class="slider round" />
  </label>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .switch {
    position: relative;
    width: 3rem;
    height: 1.6rem;
    margin-left: 0.5rem;
  }

  .switch input {
    width: 0;
    height: 0;
  }

  .slider {
    cursor: pointer;
    position: absolute;
    inset: 0;
    background-color: #ccc;
    border-radius: 1rem;
    transition: 0.4s;
  }

  .slider::before {
    content: "";
    position: absolute;
    height: 1.3rem;
    width: 1.3rem;
    top: 0.13rem;
    left: 0.13rem;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:hover + .slider {
    box-shadow: 0 0 0.5rem #2196f3;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider::before {
    transform: translateX(1.44rem);
  }
</style>
