<template>
  <div>
    <!-- Price Section start-->
    <section id="price" class="price">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <carousel :className='"price-carousel"'
                      :loop=true
                      :margin=30
                      :items=3
                      :center=false
                      :nav=false
                      :dots=false
                      :dotsEach=false
                      :autoplay=false
                      :responsive="{0:{items:1, dots:true},600:{items:1,dots:true},768:{items:2,dots:true},992:{items:3,nav:false},1000:{items:3,nav:false}}"
            >
              <div class="price-item">
                <div class="price-block">
                  <div class="price-type">
                    <h2>basic</h2>
                  </div>
                  <div class="mrp">
                    <h6 class="user-type">Only the basic features</h6>
                    <div class="price-devide"></div>
                    <h2>$969</h2>
                    <h6 class="price-year">per year</h6>
                    <div class="price-devide"></div>
                  </div>
                  <ul class="price-feature">
                    <li>1 GB of space</li>
                    <li>real time sync</li>
                    <li>unlimited attachment</li>
                    <li>customize theme</li>
                    <li>priority email support</li>
                  </ul>
                  <a href="#" class="btn btn-custom theme-color" role="button" >Select Plane</a>
                </div>
              </div>
              <div class="price-item">
                <div class="price-block">
                  <div class="price-type">
                    <h2>Standard</h2>
                  </div>
                  <div class="mrp">
                    <h6 class="user-type">Take it to the next level</h6>
                    <div class="price-devide"></div>
                    <h2>$969</h2>
                    <h6 class="price-year">per year</h6>
                    <div class="price-devide"></div>
                  </div>
                  <ul class="price-feature">
                    <li>1 GB of space</li>
                    <li>real time sync</li>
                    <li>unlimited attachment</li>
                    <li>customize theme</li>
                    <li>priority email support</li>
                  </ul>
                  <a href="#" class="btn btn-custom theme-color" role="button" >Select Plane</a>
                </div>
                </div>
              <div class="price-item">
                <div class="price-block">
                  <div class="price-type">
                    <h2>Custom</h2>
                  </div>
                  <div class="mrp">
                    <h6 class="user-type">Our biggest plan</h6>
                    <div class="price-devide"></div>
                    <h2>$969</h2>
                    <h6 class="price-year">per year</h6>
                    <div class="price-devide"></div>
                  </div>
                  <ul class="price-feature">
                    <li>1 GB of space</li>
                    <li>real time sync</li>
                    <li>unlimited attachment</li>
                    <li>customize theme</li>
                    <li>priority email support</li>
                  </ul>
                  <a href="#" class="btn btn-custom theme-color" role="button" >Select Plane</a>
                </div>
                  </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
    <!-- Price Section End -->
  </div>
</template>
<script>
export default {
  name: 'Price',
  }
</script>
