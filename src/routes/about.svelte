<style>
  h3 {
    font-family: "Gochi Hand", sans-serif;
  }

  .days {
    grid-template-columns: repeat(1, 1fr);
  }

  .about_container_inner {
    grid-template-areas: "title skills" "days skills" "days skills" "days skills" "notes interests";
    grid-template-columns: 50% 50%;
  }

  .skills {
    grid-area: skills;
    margin: 25px 0 0 20px;
    border: 2px solid #111;
    border-width: 0 2px 2px;
    position: relative;
  }
  .skills__item {
    padding: 3px 12px;
  }

  .skills__item__desc {
    display: inline-block;
    font: 18px "Gochi Hand", cursive;
    vertical-align: top;
  }
  .skills > span:nth-child(1) {
    position: absolute;
    text-transform: uppercase;
    font: 700 9px "Rock Salt", cursive;
    top: -40px;
    transform: rotate(-15deg);
  }
  .skills > span:nth-child(2) {
    display: block;
    margin: -25px 22px;
    font: 32px "Lobster", cursive;
    text-shadow: 2px 1px 0 #fbfae8, 5px 4px 0 coral;
  }
  .skills > span:nth-child(2):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    top: 0;
    left: 0;
    background: #111;
    background: linear-gradient(
      to right,
      #111 15px,
      transparent 15px,
      transparent 95px,
      #111 95px
    );
  }
  .skills__inner {
    margin-top: 40px;
  }

  .interests {
    grid-area: interests;
    margin: 20px 0 20px 20px;
  }
  .interests h4 {
    text-align: center;
    display: block;
    margin: 0 0 10px;
    font: 16px/1 "Rock Salt", cursive;
  }

  .interests ul li {
    font: 19px "Gochi Hand", cursive;
    margin-left: 10px;
  }

  @media screen and (max-width: 600px) {
    .container_inner {
      display: block;
    }

    .skills {
      margin: 83px 0 0 0;
    }

    .notes {
      margin: 40px 20px 0 0;
    }
  }
</style>

<div class="container_inner about_container_inner">
  <div class="title">
    <h1>Srikanth Adi</h1>
    <h3>aadisrikanth@gmail.com</h3>
  </div>
  <div class="days">
    <div class="days__item">
      <div class="days__day">Arcesium India - Current</div>
      <div class="days__list">
        <p>Javascript, ReactJS, Webpack, React StyleGuidist</p>
        <p>Web Components, GruntJS, Jest, Kotlin</p>
        <div class="highlighted">
          <div class="text">
            <span>Principal Engineer</span>
          </div>
        </div>
      </div>
    </div>
    <div class="days__item">
      <div class="days__day">AOL India</div>
      <div class="days__list">
        <p>AngularJS, Jquery, GulpJS, Protractor</p>
        <p>CSS, Bootstrap 3, Java</p>
        <div class="highlighted">
          <div class="text">
            <span>Senior Software Engineer</span>
          </div>
        </div>
      </div>
    </div>
    <div class="days__item">
      <div class="days__day">BravoLucy Technologies</div>
      <div class="days__list">
        <p>EmberJS, Jquery, Jquery UI</p>
        <p>Bootstrap, GruntJS, Java</p>
        <div class="highlighted">
          <div class="text">
            <span>Product Developer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="notes">
    <span>Other</span>
    <div class="notes__list">
      - Worked remotely as technical consultant for Magnifi, Deliradio spinoff
      <br />
      - Other stincts involved Satyam, BITS-Pilani, Serenus
    </div>
  </div>
  <div class="skills">
    <span>Experianced</span>
    <span>Skills</span>
    <img
      src="darts.svg"
      width="120"
      alt="skills"
      style=" position: absolute; right: 2vw; " />
    <div class="skills__inner">
      <div class="skills__list">
        <div class="skills__item">
          <div class="skills__item__desc">
            <div>
              Languages
              <ul>
                <li>Javascript</li>
                <li>Java</li>
                <li>C#</li>
                <li>PHP</li>
              </ul>
            </div>
            <div>
              Frameworks
              <ul>
                <li>ReactJS</li>
                <li>AngularJS</li>
                <li>EmberJS</li>
                <li>SvelteJS</li>
                <li>C#</li>
                <li>ASP.NET</li>
              </ul>
            </div>
            <div>
              Other
              <ul>
                <li>Webpack</li>
                <li>HTML, CSS</li>
                <li>Photoshop</li>
                <li>SQL</li>
                <li>Java Servlets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="interests">
    <h4>Interests & Hobbies</h4>
    <ul>
      <li>Coding, OSS Support</li>
      <li>Football, Manchester United</li>
    </ul>
  </div>
</div>
