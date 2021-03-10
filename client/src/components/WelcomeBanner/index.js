import React from "react";
import "./style.css";

function WelcomeBanner() {
  return (
  <div class="welcome-banner text-center">
  <h1 class="capr-palliser-font mb-3">Hello and welcome to Kayla's Kitchen!</h1>
  <h5 class="mb-5">I’m Kayla, just your average person navigating post-grad
    quarantine life.
    As a college student juggling a full course load, part-time job, extracurriculars, and a decent social
    life, the last thing I wanted to do everyday was cook. I’ll confess… I was dependent on DoorDash and
    frozen
    dinners. Then the coronavirus pandemic hit, and like many, I’ve been finding solace in baking and
    cooking. I
    think its safe to say that the pandemic-cooking craze has surely swept me up. After months dabbling in
    the
    kitchen I want to share with you all my favorite healthy, yet delicious recipes that are my go to.</h5>

  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-container">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./assets/images/ApplePieTartletsBanner1.jpg" class="d-block w-100" alt="Apple Pie Tartlets">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="./assets/images/FortuneCookiesBanner.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="./assets/images/ParmesanMushroomTartletsBanner.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
      <a class="recipesBtn" href="recipes.html">LET'S FIND A RECIPE</a>
    </div>
  </div>
</div>
);
}

export default WelcomeBanner;
