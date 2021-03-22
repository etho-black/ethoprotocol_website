<template>
  <div id="main_div">


    <!--Home Section start-->
    <section id="home" class="home home-three vertical-scrolling">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-12">
            <div class="home-contain">
              <div class="text-white">
                <div class="contain">
                  <img :src='"../assets/images/home2/logo-icon.png"' alt="">
                  <h4 >Landing page for</h4>
                  <h1 class="text-white">t<span class="f-bold">o</span>v<span class="f-bold">o</span>
                    <span class="f-bold f-color text-white">app</span>
                  </h1>
                  <p class="slide-cap-desc">Enhance your business ideas with Powerful, Responsive, Elegant TOVO Theme.</p>
                  <a href="#"><img :src='"../assets//images/appstore.png"' alt="appstore" class="store"></a>
                  <a href="#"><img class="ml-10 store" :src='"../assets//images/play-store.png"' alt="play-store"></a>
                </div>

                <div class="play-button">
                  <a v-on:click="isHidden = !isHidden"  class="popup-vimeo animated-circle" ><img :src='"../assets/images/home2/play-button.png"' alt="play-button" class="img-fluid"></a>
                </div>
                <div  v-on:click="isHidden = !isHidden" v-if="!isHidden"  class="white-popup">
                  <vimeo-player :player-width='940' :player-height='529'   class="vimeo-player" ref="player" :video-id=videoid />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-7">
            <div class="home-right">
              <!-- Tile js start -->
              <!--set image in ../assets/images/ after thst give this path-->
              <Tile  :image = '"home3/home-3-img.png"'/>
              <!-- Tile js end -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Home Section End-->

    <!-- About Start  -->
    <About/>
    <!-- About End -->

    <!-- Feature Section start -->
    <Feature/>
    <!-- Feature Section End -->

    <!-- Screenshots Section Start -->
    <Screenshots/>
    <!-- Screenshots Section End -->

    <!-- Team Section Start -->
    <Team/>
    <!-- team Section End -->

    <!-- blog Section Start -->
    <Latest-blog/>
    <!-- blog Section End -->

    <!-- Price Section start-->
    <Price/>
    <!-- Price Section End -->

    <!-- testimonial Section start-->
    <Testimonial/>
    <!-- testimonial Section End -->

    <!-- Contact Section start -->
    <Contact_us/>
    <!-- Contact Section End -->

    <!--Subscribe section start-->
    <Subscribe/>
    <!--Subscribe section Ends-->

    <!--Map Section Start-->
    <Map/>
    <!--Map Section Ends-->

    <!-- Footer Section start -->
    <Footer/>
    <!-- Footer Section End -->
    <js/>

  </div>
</template>
<script>
export default {
  name: 'Home_three',
  data () {
    return {
      isHidden: true,
      videoid:54298665
    }
  },
  beforeCreate: function () {
    document.body.className = 'home-style three'
  }

}
</script>
