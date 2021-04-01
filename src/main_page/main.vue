<template>
 <div id="main_div">

   <!-- Home Section start-->
   <section id="home" class="home">
     <div class="home-decor">
       <div class="home-circle1"><img :src='"../assets/images/main-banner3.png"' alt=""></div>
       <div class="home-circle2"><img :src='"../assets/images/main-banner12.png"' alt=""></div>
       <div class="home-circle3"><img :src='"../assets/images/main-banner1.png"' alt=""></div>
     </div>
     <div class="container">
       <div class="row">
         <div class="col-md-5">
           <div class="home-contain">
             <div>
               <h4>#Decentralize Everything</h4>
               <h1 style="font-size: 40px;">
                 <span class="f-bold f-color">The</span>
                 E<span class="f-bold">t</span>h<span class="f-bold">o</span>
                 <span class="f-bold f-color">Protocol</span>
               </h1>
               <div style="width: 500px;">
               <carousel :className='"intro-carousel"':loop=false
                        :margin=30
                        :items=1
                        :nav=false
                        :dots=true
                        :dotsEach=true
                        :autoplay=true
                        :responsive="{0:{items:1,margin:5},600:{items:1,margin:5},768:{items:1},992:{items:1},1000:{items:1}}"
              >
                  <div>
                   <p>The Etho Protocol is a decentralized protocol and project to it’s core. The project was born out of a dream to build an entirely democratized internet free from the centralized hands of corporate greed, where all data and information is completely held in the public domain, giving governance of this data back to the masses via consensus and democracy.</p>
                  </div>
                  <div>
                   <p>From development, to funding and platforms, everything we build revolves around the project ethos of decentralizing everything. The technology that sets the project apart is the decentralized storage network integrated with an EVM blockchain and an economic model around it to keep the engine running! </p>
                  </div>
                  <div>
                   <p>The project itself is managed by several decentralized contributing teams: etho.black (core development & project management), etho.pink (marketing & community management), etho.blue (business development) and was founded by several members in the etho.black core development team.</p>
                  </div>
                </carousel>
                </div>
             </div>
           </div>
         </div>
         <div class="col-sm-6 offset-md-1">
         
           <div class="home-right" style="margin-left: 30%;">
             <!-- Tile js start -->
             <img :src='"../assets/images/etho/mainEthoImage.png"'/>
             <!-- Tile js end -->
             
             <h1 style="font-size: 24px;">
                 <span class="f-bold f-color">The </span>Ether-1 <span class="f-bold f-color">Project is now The</span>
                 E<span class="f-bold">t</span>h<span class="f-bold">o</span>
                 <span class="f-bold f-color">Protocol</span>
               </h1>
               <h6><a href="https://medium.com" style="color:#cc0066;">Read more about our rebranding effort</a></h6>
             </div>
         </div>
       </div>
     </div>
   </section>
   <!--Home Section End -->

   <!-- About Start  -->
   <About/>
   <!-- About End -->

   <!-- Feature Section start -->
   <Feature/>
   <!-- Feature Section End -->

    <!-- Price Section start-->
   <Price/>
   <!-- Price Section End -->

   <!-- Screenshots Section Start -->
   <Screenshots/>
   <!-- Screenshots Section End -->

   <!-- Team Section Start -->
   <Team/>

   <!-- team Section End -->

  <!-- Partners Section Start -->
   <Partners/>

   <!-- Partners Section End -->

   <!-- blog Section Start -->
   <Latest-blog/>
   <!-- blog Section End -->


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


export default {
  name: 'Main_page',
  beforeCreate: function () {
    document.body.className = ''
  }
}
</script>
