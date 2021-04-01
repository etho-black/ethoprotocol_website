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
            <img :src='"../assets/images/etho/ethoBlackLogo.png"' alt="">
            <h2 class="title">Core Development<span> Team</span></h2>
          </div>
          <div class="col-sm-12">
            <div>
              <carousel :className='"team-carousel"'
              :loop=true
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
                          <img :src='"../assets/images/etho/fallen.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>Ethan van Ballegooyen</h3>
                          <h6>Core Developer</h6>
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
                          <img :src='"../assets/images/etho/james.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>James Reilly</h3>
                          <h6>Founder & Core Developer</h6>
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
                          <img :src='"../assets/images/etho/dylie.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>Dylie</h3>
                          <h6>Core Developer</h6>
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
                          <img :src='"../assets/images/etho/exlo.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>Exlo</h3>
                          <h6>Developer & Council Member</h6>
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
                          <img :src='"../assets/images/etho/legacy.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>LegacyTrx</h3>
                          <h6>Developer</h6>
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
                          <img :src='"../assets/images/etho/newcoderunner.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>NewCodeRunner</h3>
                          <h6>Developer</h6>
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

      <div class="team-decor">
        <div class="team-circle1"><img :src='"../assets/images/team1.png"' alt=""></div>
        <div class="team-circle2"><img :src='"../assets/images/team3.png"' alt=""></div>
        <div class="team-circle3"><img :src='"../assets/images/team.png"' alt=""></div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <img :src='"../assets/images/etho/ethoPinkLogo.png"' alt="">
            <h2 class="title">Marketing & Community Managament<span> Team</span></h2>
          </div>
          <div class="col-sm-12">
            <div>
              <carousel :className='"team-carousel"'
                        :loop=true
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
                          <img :src='"../assets/images/etho/pistol.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>Pistol</h3>
                          <h6>Community Manager & Team Leader</h6>
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
                          <img :src='"../assets/images/etho/cryptosaiyan.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>CryptoSaiyan</h3>
                          <h6>Community Manager</h6>
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
                          <img :src='"../assets/images/etho/alob.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>Alob</h3>
                          <h6>Community Moderator</h6>
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

      <div class="team-decor">
        <div class="team-circle1"><img :src='"../assets/images/team1.png"' alt=""></div>
        <div class="team-circle2"><img :src='"../assets/images/team3.png"' alt=""></div>
        <div class="team-circle3"><img :src='"../assets/images/team.png"' alt=""></div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <img :src='"../assets/images/etho/ethoBlueLogo.png"' alt="">
            <h2 class="title">Business Development<span> Team</span></h2>
          </div>
          <div class="col-sm-12">
            <div>
              <carousel :className='"team-carousel"' :loop=false
                        :margin=30
                        :items=2
                        :nav=false
                        :dots=true
                        :dotsEach=true
                        :autoplay=false
                        :responsive="{0:{items:1,margin:5},600:{items:1,margin:5},768:{items:2},992:{items:2},1000:{items:2}}"
              >
                  <div class="team-item">
                    <div class="team-block">
                      <div class="team-box">
                        <div class="team-avtar">
                          <img :src='"../assets/images/etho/chris.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>Chris Terry</h3>
                          <h6>Business Development Manager & Team Leader</h6>
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
                          <img :src='"../assets/images/etho/treehouse.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>Treehouse</h3>
                          <h6>Project Manager</h6>
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
