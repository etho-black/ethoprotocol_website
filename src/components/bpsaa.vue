<template>
  <div>
    <!-- testimonial Section start-->
    <section id="bpsaa" class="testimonial">
      <div class="testimonial-decor">
        <div class="testi-circle1"><img :src='"../assets/images/Testimonial2.png"' alt=""></div>
        <div class="testi-circle2"><img :src='"../assets/images/Testimonial1.png"' alt=""></div>
      </div>

      <div class="container">
      <h2 class="title"><span> ETHO</span> is a BPSAA Founding Member</h2><br>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">

              <carousel :className='"testimonial-carousel "'
                        :loop=true
                        :margin=30
                        :items=3
                        :center=true
                        :nav=true
                        :dots=false
                        :dotsEach=false
                        :autoplay=true
                        :responsive="{0:{items:1,dots:true,nav:false},768:{items:2,dots:true,nav:false},992:{nav:true}}"
              >
              <div class="testimonial-item">
                <div class="testimonial-block">

                  <div class="testimonial-text">
                    <a href="https://ether1.org"><img :src='"../assets/images/etho/ethoprotocol.png"' alt=""></a>
                    <h6>Etho Protocol</h6>
                  </div>
                </div>
              </div>
               <div class="testimonial-item">
                <div class="testimonial-block">

                  <div class="testimonial-text">
                    <a href="https://turtlenetwork.eu"><img :src='"../assets/images/etho/turtle.png"' alt=""></a>
                    <h6>Turtle Network</h6>
                  </div>
                </div>
              </div>
               <div class="testimonial-item">
                <div class="testimonial-block">

                  <div class="testimonial-text">
                    <a href="https://ergoplatform.org"><img :src='"../assets/images/etho/ergo.png"' alt=""></a>
                    <h6>Ergo Platform</h6>
                  </div>
                </div>
              </div>
                <div class="testimonial-item">
                <div class="testimonial-block">

                  <div class="testimonial-text">
                    <a href="https://pirate.black"><img :src='"../assets/images/etho/pirate.png"' alt=""></a>
                    <h6>Pirate Network</h6>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-block">

                  <div class="testimonial-text">
                    <a href="https://burst-coin.org"><img :src='"../assets/images/etho/burst.png"' alt=""></a>
                    <h6>Burst Platform</h6>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-block">

                  <div class="testimonial-text">
                    <a href="https://dragonchain.com"><img :src='"../assets/images/etho/dragon.png"' alt=""></a>
                    <h6>Dragonchain Network</h6>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-block">

                  <div class="testimonial-text">
                    <a href="https://bittube.tv"><img :src='"../assets/images/etho/bittube.png"' alt=""></a>
                    <h6>Bittube Platform</h6>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-block">

                  <div class="testimonial-text">
                    <a href="https://komodoplatform.com"><img :src='"../assets/images/etho/komodo.png"' alt=""></a>
                    <h6>Komodo Platform</h6>
                  </div>
                </div>
              </div>
            </carousel>

          </div>
           <a href="https://bpsaa.vision"><img :src='"../assets/images/etho/bpsaa.png"' alt=""></a>
        </div>
      </div>
    </section>
    <!-- testimonial Section End -->
  </div>
</template>
<script>

export default {
  name: 'Bpsaa',
};
</script>
