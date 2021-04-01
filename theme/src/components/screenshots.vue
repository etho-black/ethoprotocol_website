<template>
    <!-- Screenshots Section Start -->
    <section id="screenshot" class="screenshot padding-top-bottom">
      <div class="screenshot-decor">
        <div class="screenshot-circle1"><img :src='"../assets/images/feature-circle-two.png"' alt="feature-circle-two"></div>
        <div class="screenshot-circle2"><img :src='"../assets/images/feature-circle.png"' alt="feature-circle"></div>
        <div class="screenshot-circle3"><img :src='"../assets/images/main-banner1.png"' alt="feature-circle-three"></div>
        
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="screenshot-contain">
              <img class="mobile-light-left" :src='"../assets/images/light.png"' alt="light">
              <img class="mob-mocup img-fluid" :src='"../assets/images/etho/screenshot-mob.png"' alt="screenshot-mob">
              <img class="mobile-light-right" :src='"../assets/images/light-right.png"' alt="light-right">
              <carousel :class='"screenshot-carousel"'
                        :loop=true
                        :margin=30
                        :items=5
                        :center=true
                        :nav=false
                        :dots=false
                        :dotsEach=false
                        :autoplay=true
                        :responsive="{0:{items:2,nav:false},767:{items:2,nav:false},768:{items:3,nav:false},992:{items:4,nav:false},1200:{items:5,nav:false}}"
                        >
                <div class="screenshot-item"><img :src='"../assets/images/app/12.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/2.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/3.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/4.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/5.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/6.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/7.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/8.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/9.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/10.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/11.jpg"' alt="app"></div>
                <div class="screenshot-item"><img :src='"../assets/images/app/1.jpg"' alt="app"></div>
              </carousel>
              
            </div><center>
            <a href="#"><img :src='"../assets/images/appstore.png"' alt="appstore" class="store"></a>
            <a href="#"><img class="ml-10 store" :src='"../assets/images/play-store.png"' alt="play-store"></a></center>
          </div>
        </div>
      </div>
    </section>
    <!-- Screenshots Section End -->
</template>
<script>
import carousel from 'v-owl-carousel'
export default {
  name:'Screenshot',
  components: {'carousel': carousel},
}
</script>
