<template>
<!-- Screenshots Section Start -->
<section id="screenshot" class="screenshot padding-top-bottom">
  <div class="screenshot-decor">
    <div class="screenshot-circle1"><img :src='"../assets/images/feature-circle-two.png"' alt="feature-circle-two"></div>
    <div class="screenshot-circle2"><img :src='"../assets/images/feature-circle.png"' alt="feature-circle"></div>
    <div class="screenshot-circle3"><img :src='"../assets/images/main-banner1.png"' alt="feature-circle-three"></div>

  </div>
  <div class="w-full" style="padding: 30px;">
    <div class="w-full h-full" style="position: relative;">
      <div class="container wallet-container">
        <div class="desktop-wallet">
           
          <div class="row" style="padding-left:20%;">
            <h2 class="title" style="font-size: 24px;">Desktop<span> Wallet</span></h2>
    
          </div>
          <div class="row">
   
            <img :src='"../assets/images/etho/desktopWallet.png"' alt="screenshot-mob" style="height: 250px;">
          </div>
          <div class="row" style="padding-left:30%;">
            <a href="https://github.com/Ether1Project/Ether1DesktopWallet" target="_blank" class="btn btn-custom theme-color" role="button" >View</a>
          </div>
          
        </div>

        <div class="mobile-wallet" >
          <div class="row">
            <h2 class="title" style="font-size: 24px;">Mobile<span> Wallet</span></h2>
          </div>
          <div class="row">
            <img :src='"../assets/images/etho/screenshot-mob.png"' alt="screenshot-mob" style="height: 480px;">
          </div>
          <div class="row mobile-buttons">
            <center class="apple-button">
              <a style="cursor: pointer;" @click="goAppleStore"><img :src='"../assets/images/appstore.png"' alt="appstore" class="store"></a>
            </center>
            <center class="google-button">
              <a style="cursor: pointer;" @click="goPlayStore"><img class="ml-10 store" :src='"../assets/images/play-store.png"' alt="play-store" ></a>
            </center>
          </div>
        </div>

        <div class="desktop-wallet" style="padding-left:5%;">
          <div class="row" style="padding-left:30%;">
            <h2 class="title" style="font-size: 24px;">Web<span> Wallet</span></h2>
          </div>
          <div class="row">
            <img :src='"../assets/images/etho/webWallet.png"' alt="screenshot-mob" style="height: 250px;">
          </div>
          <div class="row" style="padding-left:30%;">
            <a href="https://wallet.ether1.org" target="_blank" class="btn btn-custom theme-color" role="button" >View</a>
          </div>
        </div>
      </div>
    </div>
        
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
