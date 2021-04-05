<template >
<!-- About Start -->
<section id="about" class="about">
  <div class="about-decor">
    <div class="about-circle1"><img :src='"../assets/images/team1.png"' alt="team1"></div>
    <div class="about-circle2"><img :src='"../assets/images/main-banner1.png"' alt="banner1"></div>
  </div>
  <div class="container">
    <div class="row ">
      <div class="col-md-5">
        <div class="about-contain">
          <div>
            <h2 class="title">Why was <span>The</span>

              <span style="color:#971B45;">Etho</span>

              <span>Protocol</span> developed?
            </h2>

            <div>
              <h3>The Problem:</h3>
            </div>
            <p class="caption-about" >Free-speech and anti-censorship are the cornerstones of any democracy but with the rise of de-platforming and online censorship, media platforms our society relies on are becoming more and
              more unreliable for the average user. </p>
            <p class="caption-about">Free-flowing information and ideas are almost always catalysts for the next stages of societal evolution as well as exponential technological growth.</p>
            <p class="caption-about">Online censorship today ranges from something as small as a single blocked tweet all the way up to a full corporate website being banned if the messaging doesn’t fit an individual platform’s definition of proper
            </p>
            <div>
              <h3>The Solution:</h3>
            </div>
            <div style="float:left;">
              <img :src='"../assets/images/etho/1icon.png"'>
            </div>
            <div style="padding-left: 50px;">
              <p class="caption-about">Decentralize content & storage hosting, so no single entity has control over what is appropriate. </p>
            </div>
            <div style="float:left; height=50px;">
              <img :src='"../assets/images/etho/2icon.png"'>
            </div>
            <div style="padding-left: 50px;">
              <p class="caption-about">Utilize community and user consensus to moderate this decentrally stored content. </p>
            </div>
            <div style="float:left; height=1000px;">
              <img :src='"../assets/images/etho/3icon.png"'>
            </div>
            <div style="padding-left: 50px;">
              <p class="caption-about">Create and maintain a closed-loop economy around steps one and two to encourage participation, reward contribution and network utilization.</p>
            </div>

          </div>
        </div>
      </div>
      <div class="col-md-7 d-medium-none">
        <div class="about-right">
          <div class="about-phone">
            <img :src='"../assets/images/etho/ethoImage1.png"' class="img-fluid" alt="aboutus">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- About End -->
</template>
<script>
export default {
  name: 'about',
};
</script>
