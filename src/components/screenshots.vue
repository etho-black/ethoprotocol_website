<template>
<!-- Screenshots Section Start -->
<section id="screenshot" class="screenshot padding-top-bottom">
  <div class="screenshot-decor">
    <div class="screenshot-circle1"><img :src='"../assets/images/feature-circle-two.png"' alt="feature-circle-two"></div>
    <div class="screenshot-circle2"><img :src='"../assets/images/feature-circle.png"' alt="feature-circle"></div>
    <div class="screenshot-circle3"><img :src='"../assets/images/main-banner1.png"' alt="feature-circle-three"></div>

  </div>
  <div class="w-full" style="padding: 30px; height: calc(100vh - 70px);">
    <div class="w-full h-full" style="position: relative;">
      <div class="w-full h-full" style="position: absolute; left: 0; top: 0; padding-top: 50px;">
        <div class="d-flex justify-content-center h-full">
          <img :src='"../assets/images/etho/screenshot-mob.png"' alt="screenshot-mob" style="height: 480px;">
        </div>
      </div>
      <div class="h-full w-full">
        <carousel class="screenshot-carousel h-full" :loop=true :items=3 :center=true :nav=false :dots=false :dotsEach=false :autoplay=true
          :responsive="{0:{items:1,nav:false},768:{items:3,nav:false},1200:{items:5,nav:false}}">
          <div class="app-screenshot"><img :src='"../assets/images/app/1.jpg"' alt="app"></div>
          <div class="app-screenshot"><img :src='"../assets/images/app/2.jpg"' alt="app"></div>
          <div class="app-screenshot"><img :src='"../assets/images/app/3.jpg"' alt="app"></div>
          <div class="app-screenshot"><img :src='"../assets/images/app/4.jpg"' alt="app"></div>
          <div class="app-screenshot"><img :src='"../assets/images/app/5.jpg"' alt="app"></div>
        </carousel>
      </div>
      <center style="padding-top: 30px;">
        <a style="cursor: pointer;" @click="goAppleStore"><img :src='"../assets/images/appstore.png"' alt="appstore" class="store"></a>
        <a style="cursor: pointer;" @click="goPlayStore"><img class="ml-10 store" :src='"../assets/images/play-store.png"' alt="play-store"></a>
      </center>
    </div>
  </div>
</section>
<!-- Screenshots Section End -->
</template>
<script>
import carousel from 'v-owl-carousel';

export default {
  name: 'Screenshot',
  components: {
    carousel,
  },
  methods: {
    goAppleStore() {
      window.open('https://apps.apple.com/us/app/nextshore-ether-1-wallet/id1521802485#?platform=iphone');
    },
    goPlayStore() {
      window.open('https://play.google.com/store/apps/details?id=app.web.nextshore_ether1&hl=en&gl=US');
    },
  },
};
</script>

<style>
  .app-screenshot {
    margin-left: calc(50vw - 140px);
  }
  .app-screenshot img {
    height: 375px !important;
    width: 220px !important;
    margin-top: 100px;
  }
</style>
