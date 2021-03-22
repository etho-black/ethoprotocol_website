<template >
  <!-- About Start -->
    <section id="about" class="about" >
      <div class="about-decor">
        <div class="about-circle1"><img :src='"../assets/images/team1.png"' alt="team1"></div>
        <div class="about-circle2"><img :src='"../assets/images/main-banner1.png"' alt="banner1"></div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col-md-5">
            <div class="about-contain">
              <div>
                <h2 class="title">about the <span>tovo app</span></h2>
                <p class="caption-about">TOVO is dynamic, high-performance and easy to use landing page theme. The theme is developed focusing on the attractive designs and easy customizable features.</p>
                <div class="row sm-mb">
                  <div class="col-6">
                    <ul class="about-style">
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                            <img :src='"../assets/images/icon1.png"' alt="easy-to-customized">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3>Easy customize</h3>
                        </div>
                      </li>
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                            <img :src='"../assets/images/icon3.png"' alt="easy-to-use">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3>easy to use</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-6">
                    <ul class="about-style">
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                            <img :src='"../assets/images/icon2.png"' alt="Awasome-Design">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3>Nice Design</h3>
                        </div>
                      </li>
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                            <img :src='"../assets/images/icon4.png"' alt="SEO-Friendly">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3>SEO Friendly</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="top-margin">
                  <button type="button" class="btn btn-custom theme-color theme-color">view more</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 d-medium-none">
            <div class="about-right">
              <div class="about-phone">
                <img  :src='"../assets/images/aboutus.png"' class="img-fluid" alt="aboutus">
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
  name: 'about'
}
</script>
