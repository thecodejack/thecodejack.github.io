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

<div class="main-content">
  <div class="notebook">
    <Nav {segment} />
    <slot></slot>
  </div>
</div>
<footer>
  Design inspired from this
  <a href="https://codepen.io/oliviale/pen/aPwaXm">Codepen</a>
  | Built with
  <a href="https://kit.svelte.dev/">
    SvelteKit
  </a>
</footer>
