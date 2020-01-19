<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  .main-content {
    flex: 1;
    display: flex;
  }

  @media screen and (max-width: 768px) {
    .main-content {
      padding: 1em;
    }
  }
</style>

<svelte:head>
  <title>Srikanth Adi | Frontend Engineer | Tech Evangelist | Mentor</title>
</svelte:head>

<Nav {segment} />

<div class="main-content">
  <div class="notebook">
    <slot />
  </div>
</div>
<footer>
  Design inspired from this
  <a href="https://codepen.io/oliviale/pen/aPwaXm">Codepen</a>
</footer>
