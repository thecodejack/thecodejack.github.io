<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    background: #fbfae8;
    flex: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #cc4b48;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0.5em;
    display: block;
    color: #333;
  }

  .logo {
    height: 30px;
    margin-top: 5px;
  }
</style>

<nav>
  <ul>
    <li>
      <img class="logo" src="logo.png" alt="logo" />
    </li>
    <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>
    <li>
      <a rel="prefetch" class:selected={segment === 'about'} href="about">
        about
      </a>
    </li>
  </ul>
</nav>
