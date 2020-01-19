<script>
  import IconBar from "./../components/iconbar.svelte";
</script>

<style>
  .home_container_inner {
    grid-template-areas: "title picture";
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
  }
  .title {
    margin: auto;
  }

  h3 {
    font-size: 20px;
  }

  .picture {
    grid-area: picture;
    margin-left: 20px;
  }
  .picture__border {
    width: 100%;
    background: #f9f9f9;
    padding: 20px 10px 50px;
    height: 95%;
    transform: rotate(5deg);
    position: relative;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
  }
  .picture__border:after {
    content: "";
    width: 55%;
    height: 20px;
    top: -10px;
    z-index: 5;
    left: 25%;
    transform: rotate(-2deg);
    position: absolute;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    background: rgba(220, 220, 220, 0.4);
  }
  .picture__border img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .picture__border figcaption {
    margin: 10px 0;
    text-align: center;
    display: block;
    font: 14px/1 "Gochi Hand", cursive;
    color: #f4442e;
  }

  .picture__border {
    padding: 20px 10px 10px;
  }
</style>

<div class="container_inner home_container_inner">
  <div class="title">
    <h3>it's</h3>
    <h1>Srikanth Adi</h1>
  </div>
  <div class="picture">
    <div class="picture__border">
      <img alt="Srikanth Adi" src="adi.jpg" />
      <figcaption>
        Frontend Engineer
        <br />
        Javascript Develeper
        <br />
        Tech Evangelist
      </figcaption>
    </div>
  </div>
</div>

<IconBar />
