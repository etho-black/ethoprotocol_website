<template>
  <div>

      <!-- home section -->
      <section class="authentication-form coming-soon">
        <div class="innerpage-decor">
          <div class="innerpage-circle1"><img :src='"../assets/images/Testimonial2.png"' alt=""></div>
          <div class="innerpage-circle2"><img :src='"../assets/images/Testimonial1.png"' alt=""></div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 offset-xl-3">
              <div class="fadeInLeft-land-caption text-center">
                <div class="">
                  <div>
                    <img :src='"../assets/images/logoimage.png"' alt="caption-img" class="caption-img">
                    <div class="clock-box">
                      <h3>We Are Coming soon</h3>
                      <p>Please check back again within Some Days as We're Pretty Close</p>
                      <countdown :time="364 * 23 * 60 * 60 * 1000">
                        <template slot-scope="props">
                          <ul class="p-0 m-0">
                            <li><span id="days">{{ props.days }}</span>days</li>
                            <li><span id="hours">{{ props.hours }}</span>Hours</li>
                            <li><span id="minutes">{{ props.minutes }}</span>Minutes</li>
                            <li><span id="seconds">{{ props.seconds }}</span>Seconds</li>
                          </ul>
                        </template>
                      </countdown>

                    </div>

                    <a href="#"><img :src='"../assets/images/appstore.png"' alt="appstore" class="store"></a>
                    <a href="#"><img class="ml-4 store" :src='"../assets/images/play-store.png"' alt="play-store"></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- home section end -->

      <section class="coming-soon md-pt-0" data-anchor="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="footer-text">
                <img :src='"../assets/images/email.png"' alt="email">
                <h2 class="title text-center md-margin-top">subscribe to <span>newsletter</span></h2>
                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour.</p>
                <form class="footer-form">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="enter your email">
                  </div>
                  <div class="form-button">
                    <button type="submit" class="btn btn-custom theme-color">send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    <Footer/>
    <!--<js/>-->
  </div>
</template>
<script>
import Vue from 'vue'
import $ from 'jquery'
import VueCountdown from '@xkeshi/vue-countdown'
Vue.component(VueCountdown.name, VueCountdown)
export default {
  name:'coming_soon',
  mounted () {
    this.loader()
  },
  methods: {

  }
}
</script>
