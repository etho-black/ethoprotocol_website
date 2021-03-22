<template>
  <div id="app">
    <section id="team" class="team">
      <div class="team-decor">
        <div class="team-circle1"><img :src='"../assets/images/team1.png"' alt=""></div>
        <div class="team-circle2"><img :src='"../assets/images/team3.png"' alt=""></div>
        <div class="team-circle3"><img :src='"../assets/images/team.png"' alt=""></div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <h2 class="title">our <span>smart team</span></h2>
          </div>
          <div class="col-sm-12">
            <div>
              <carousel :className='"team-carousel"':loop=true
                        :margin=30
                        :items=3
                        :nav=false
                        :dots=true
                        :dotsEach=true
                        :autoplay=false
                        :responsive="{0:{items:1,margin:5},600:{items:1,margin:5},768:{items:2},992:{items:3},1000:{items:3}}"
              >
                  <div class="team-item">
                    <div class="team-block">
                      <div class="team-box">
                        <div class="team-avtar">
                          <img :src='"../assets/images/avtar/1.jpg"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>mark jkcno</h3>
                          <h6>designer</h6>
                        </div>
                        <div class="overlay">
                          <ul class="team-social">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="team-item">
                    <div class="team-block">
                      <div class="team-box">
                        <div class="team-avtar">
                          <img :src='"../assets/images/avtar/15.jpg"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>john doe</h3>
                          <h6>devloper</h6>
                        </div>
                        <div class="overlay">
                          <ul class="team-social">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="team-item">
                    <div class="team-block">
                      <div class="team-box">
                        <div class="team-avtar">
                          <img :src='"../assets/images/avtar/22.jpg"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>johanson let</h3>
                          <h6>ux designer</h6>
                        </div>
                        <div class="overlay">
                          <ul class="team-social">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="team-item">
                    <div class="team-block">
                      <div class="team-box">
                        <div class="team-avtar">
                          <img :src='"../assets/images/avtar/1.jpg"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>John Shipmen</h3>
                          <h6>tester</h6>
                        </div>
                        <div class="overlay">
                          <ul class="team-social">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'Team'
}
</script>
