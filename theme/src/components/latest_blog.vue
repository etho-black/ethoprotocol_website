<template>
  <div>
    <!-- blog Section Start -->
    <section id="blog" class="blog">
      <div class="about-decor">
        <div class="about-circle1"><img :src='"../assets/images/team1.png"' alt=""></div>
        <div class="about-circle2"><img :src='"../assets/images/main-banner1.png"' alt=""></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="title">latest <span>blog</span></h2>
          </div>
          <div class="col-sm-12">
              <carousel :className='"blog-carousel"'
                        :loop=true
                        :margin=30
                        :items=2
                        :center=false
                        :nav=false
                        :dots=true
                        :autoplay=true
                        :responsive="{0:{items:1,nav:false},600:{items:1,nav:false},768:{items:2,nav:false},992:{items:2,nav:false},1000:{items:2,nav:false}}"
              >
                <div class="blog-item">
                  <div class="blog-block">
                    <div class="blog-box">
                      <div class="overflow-hidden"><a :href='"/tovo/blog-details"'><img :src='"../assets/images/blog/8.jpg"' class="img-fluid" alt=""></a></div>
                    </div>
                  </div>
                  <div class="blog-text">
                    <h6>12 march 2015</h6>
                    <a :href='"/tovo/blog-details"'>
                      <h3>The first line of Lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.</h3>
                    </a>
                    <h5>posted by Mark jkcno, 10 hits, 50 comment</h5>
                  </div>
                </div>
                <div class="blog-item">
                  <div class="blog-block">
                    <div class="blog-box">
                      <div class="overflow-hidden"><a :href='"/tovo/blog-details"'><img :src='"../assets/images/blog/blog3.jpg"'  class="img-fluid" alt=""></a></div>
                    </div>
                  </div>
                  <div class="blog-text">
                    <h6>25 january 2018</h6>
                    <a :href='"/tovo/blog-details"'>
                      <h3>There are many variations of passages of Lorem Ipsum available, </h3>
                    </a>
                    <h5>posted by johan doe, 1 hits, 5 comment</h5>
                  </div>
                </div>
                <div class="blog-item">
                  <div class="blog-block">
                    <div class="blog-box">
                      <div class="overflow-hidden"><a :href='"/tovo/blog-details"'><img :src='"../assets/images/blog/6.jpg"'  class="img-fluid" alt=""></a></div>
                    </div>
                  </div>
                  <div class="blog-text">
                    <h6>15 jun 2016</h6>
                    <a :href='"/tovo/blog-details"'>
                      <h3>Lorem Ipsum has been the industry's standard dummy text </h3>
                    </a>
                    <h5>posted by johanson let, 15 hits, 30 comment</h5>
                  </div>
                </div>
                <div class="blog-item">
                  <div class="blog-block">
                    <div class="blog-box">
                      <div class="overflow-hidden"><a :href='"/tovo/blog-details"'><img :src='"../assets/images/blog/7.jpg"'  class="img-fluid" alt=""></a></div>
                    </div>
                  </div>
                  <div class="blog-text">
                    <h6>10 February 2012</h6>
                    <a :href='"/tovo/blog-details"'>
                      <h3>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</h3>
                    </a>
                    <h5>posted by John Shipmen, 6 hits, 8 comment</h5>
                  </div>
                </div>
                <div class="blog-item">
                  <div class="blog-block">
                    <div class="blog-box">
                      <div class="overflow-hidden"><a :href='"/tovo/blog-details"'><img :src='"../assets/images/blog/9.jpg"'  class="img-fluid" alt=""></a></div>
                    </div>
                  </div>
                  <div class="blog-text">
                    <h6>28 December 2017</h6>
                    <a :href='"/tovo/blog-details"'>
                      <h3>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</h3>
                    </a>
                    <h5>posted by Walo Boni, 9 hits, 4 comment</h5>
                  </div>
                </div>
             </carousel>
          </div>
        </div>
      </div>
    </section>
    <!-- blog Section End -->
  </div>
</template>
<script>
export default {
  name: 'LatestBlog',
}
</script>
