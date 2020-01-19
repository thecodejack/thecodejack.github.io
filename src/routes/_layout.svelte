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
  | Built with
  <a href="https://sapper.svelte.dev/">
    <img
      alt="https://sapper.svelte.dev/"
      height="16"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAVFBMVEVHcEwVlJcVlJcVlJcUlJcVlJcVlJcVlJcSlJcVlJcFkpX///8AjZDm8fIAhoqHv8BSqKo9oKOPw8Wq0dLg7u7R5ua82tsnmZycycu219iBvL78/v5YvaflAAAACnRSTlMAnMyn6w9VLvtBNkS3QAAAAI5JREFUGJVNj1kShCAQQ9FBlnQDAoI1zv3vOaBomb+8Si8RYkgrK17SEsxQj5/AqdQdI6QNR0dNMLfPRFuslLB0MPNGlDwjhwtgJQd/fIOHPEdMJLe2EBX+XCe4NNfZihNI+NDzboAFRwb70EI8XyBQjW1HZqPHyK/viGzGoxZ7LYkxPU1ULyb1u6xVj/0DEDgHqXcL6fYAAAAASUVORK5CYII="
      width="16"
      data-atf="1" />
  </a>
</footer>
