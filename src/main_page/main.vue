<template>

<div id="main_div">

  <!-- Home Section start-->
  <section id="home" class="home">
    <div class="home-decor">
      <div class="home-circle1"><img :src='"../assets/images/main-banner3.png"' alt=""></div>
      <div class="home-circle2"><img :src='"../assets/images/main-banner12.png"' alt=""></div>
      <div class="home-circle3"><img :src='"../assets/images/main-banner1.png"' alt=""></div>
    </div>
    <div class="h-full" style="padding: 30px;">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="home-contain">
            <div class="w-full p-2">
              <h4>#Decentralize Everything</h4>
              <h1 style="font-size: 40px;" class="wrap">
                <span class="f-bold f-color">The</span>
                <span class="d-none d-md-inline f-bold">ETHO</span>
                <div class="d-md-none f-bold pt-2 pb-2">ETHO</div>
                <span class="f-bold f-color">Protocol</span>
              </h1>
			        
              <div class="w-full">
                <h4>#FREEDOM OF DATA</h4>
                <div class="paragraph-text">
                  <p>The Etho Protocol is a decentralized protocol and project to its core. The project was born out of a dream to build an entirely democratized internet free from the centralized hands, where all data and information is completely held in the public domain, giving governance of data back to the masses via consensus and democracy.</p>
                </div>
                <h4>#DATA DISTRIBUTED VIA IPFS</h4>
                <div class="paragraph-text">
                  <p>In order to provide distributed data following the principles of blockchain we are utilizing IPFS on more than 600 Etho nodes distributed around the world. As uploaded data is replicated across our network of distributed nodes, DDOS attacks and outages are no longer a threat!</p>
                </div>
                <h4>#NFTS</h4>
                <div class="paragraph-text">
                  <p>Creating Non Fungible Tokens (NFTs) is as simple as using Ethereum because the Etho protocol uses the latest solidity EVM but the storage of the content/data behind your NFTs is what sets Etho apart. Storing NFT data on the same network they were minted on creates a level of permanence not seen anywhere else. This is how NFTS were meant to be minted, stored and collected!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1 d-none d-md-block" />
        <div class="col-12 col-md-5 d-none d-md-block">
          <div class="home-contain p-2">
            <div>
              <!-- Tile js start -->
              <div class="d-flex justify-content-center">
                <img :src='"../assets/images/etho/mainEthoImage.png"' style="width: 50%; object-fit: contain;" />
              </div>
              <!-- Tile js end -->

              <h1 style="font-size: 24px;">
                <span class="f-bold f-color">The </span><span class="f-bold">Ether-1 </span> <span class="f-bold f-color">Project is now The</span>
                <span class="f-bold">ETHO</span>
                <span class="f-bold f-color">Protocol</span>
              </h1>
              <h6>Join us on <a href="https://discordapp.com/invite/MFn9Tmz" target="_blank" style="color:#971B45;">Discord</a> to learn more about our rebranding effort</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="d-sm-block d-md-none p-2">
    <!-- Tile js start -->
    <div class="d-flex justify-content-center">
      <img :src='"../assets/images/etho/mainEthoImage.png"' style="width: 50%; object-fit: contain;" />
    </div>
    <!-- Tile js end -->

    <div class="d-flex justify-content-center">
      <h1 style="font-size: 24px;">
        <span class="f-bold f-color">The </span><span class="f-bold">Ether-1 </span> <span class="f-bold f-color">Project is now The</span>
        <span class="f-bold">ETHO</span>
        <span class="f-bold f-color">Protocol</span>
      </h1>
    </div>
    <div class="d-flex justify-content-center">
      <h6 style="padding: 0; margin: 0;"><a href="https://medium.com" target="_blank" style="color:#cc0066;">Read more about our rebranding effort</a></h6>
    </div>
  </div>
  <!--Home Section End -->

  <!-- About Start  -->
  <About />
  <!-- About End -->

  <!-- Feature Section start -->
  <Feature />
  <!-- Feature Section End -->

  <!-- Price Section start-->
  <Price />
  <!-- Price Section End -->

  <!-- Screenshots Section Start -->
  <Screenshots />
  <!-- Screenshots Section End -->

  <!-- Team Section Start -->
  <Team />

  <!-- team Section End -->

  <!-- Partners Section Start -->
  <Partners />

  <!-- Partners Section End -->

  <!-- Bpsaa Section Start -->
  <Bpsaa />

  <!-- Bpsaa Section End -->

  <!--Map Section Start-->
  <Map />
  <!--Map Section Ends-->

  <!-- Footer Section start -->
  <Footer />
  <!-- Footer Section End -->

  <js />
</div>
</template>

<script>
export default {
  name: 'Main_page',
  beforeCreate() {
    document.body.className = '';
  },
};
</script>

<style>
  .w-full {
    width: 100%;
  }
  .h-full {
    height: 100%;
  }
  .paragraph-text {
    max-width: calc(100vw - 60px);
  }
  .intro-carousel .owl-carousel {
    width: 100% !important;
  }
  [classname=intro-carousel] .owl-dots {
    position: static !important;
  }
</style>
