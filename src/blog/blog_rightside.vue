<template>
  <div>

    <!--blog right Section start-->
    <div class="page-margin">

      <!--breadcrumb start-->
      <div class="breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-text-center d-align-center">
              <h2 class="title">Right<span> Sidebar</span></h2>
            </div>
            <div class="col-md-6 col-sm-6 col-text-center">
              <nav aria-label="breadcrumb" class="blog-bradcrumb ">
                <ol class="breadcrumb bg-transparent mb-0">
                  <li class="breadcrumb-item"><router-link :to='"/tovo"'>Home</router-link></li>
                  <li class="breadcrumb-item active"><router-link :to='"/tovo/blog-list"'>Blog List</router-link></li>
                  <li class="breadcrumb-item active"><a href="#">Right Sidebar</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--breadcrumb end -->

      <!--blog Section start-->
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-9 blog-sec">
              <div class="row blog-list">
                <div class="col-lg-6 col-md-12">
                  <div class="blog-item">
                    <div class="blog-block">
                      <div class="blog-box">
                        <div class="overflow-hidden"><a :to="{name:'Blog_details'}"><img :src='"../assets/images/blog/blog3.jpg"' alt="blog" class="img-fluid"></a></div>
                      </div>
                    </div>
                    <div class="blog-text">
                      <router-link :to="{name:'Blog_details'}">
                        <h3>There are many variations of passages.</h3>
                        <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
                      </router-link>
                      <h5>Mark jkcno</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="blog-item">
                    <div class="blog-block">
                      <div class="blog-box">
                        <div class="overflow-hidden"><a :to="{name:'Blog_details'}"><img :src='"../assets/images/blog/6.jpg"' alt="blog" class="img-fluid"></a></div>
                      </div>
                    </div>
                    <div class="blog-text">
                      <router-link :to="{name:'Blog_details'}">
                        <h3>There are many variations of passages.</h3>
                        <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
                      </router-link>
                      <h5>Mark jkcno</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="blog-item">
                    <div class="blog-block">
                      <div class="blog-box">
                        <div class="overflow-hidden"><a :to="{name:'Blog_details'}"><img :src='"../assets/images/blog/7.jpg"' alt="blog" class="img-fluid"></a></div>
                      </div>
                    </div>
                    <div class="blog-text">
                      <router-link :to="{name:'Blog_details'}">
                        <h3>There are many variations of passages.</h3>
                        <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
                      </router-link>
                      <h5>Mark jkcno</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="blog-item">
                    <div class="blog-block">
                      <div class="blog-box">
                        <div class="overflow-hidden"><a :to="{name:'Blog_details'}"><img :src='"../assets/images/blog/8.jpg"' alt="blog" class="img-fluid"></a></div>
                      </div>
                    </div>
                    <div class="blog-text">
                      <router-link :to="{name:'Blog_details'}">
                        <h3>There are many variations of passages.</h3>
                        <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
                      </router-link>
                      <h5>Mark jkcno</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="blog-item">
                    <div class="blog-block">
                      <div class="blog-box">
                        <div class="overflow-hidden"><a :to="{name:'Blog_details'}"><img :src='"../assets/images/blog/9.jpg"' alt="blog" class="img-fluid"></a></div>
                      </div>
                    </div>
                    <div class="blog-text">
                      <router-link :to="{name:'Blog_details'}">
                        <h3>There are many variations of passages.</h3>
                        <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
                      </router-link>
                      <h5>Mark jkcno</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="blog-item">
                    <div class="blog-block">
                      <div class="blog-box">
                        <div class="overflow-hidden"><a :to="{name:'Blog_details'}"><img :src='"../assets/images/blog/9.jpg"' alt="blog" class="img-fluid"></a></div>
                      </div>
                    </div>
                    <div class="blog-text">
                      <router-link :to="{name:'Blog_details'}">
                        <h3>There are many variations of passages.</h3>
                        <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
                      </router-link>
                      <h5>Mark jkcno</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 order-md-last list-sidebar">
              <div class="sidebar">
                <div class="sidebar-space">
                  <h4 class="blog-title">blog Category</h4>
                  <div class="blog-divider"></div>
                  <div class="blog-cat-detail">
                    <ul>
                      <li class="marg-15">
                        <router-link :to="{name:'Blog_details'}">
                          <i class="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum is simply
                        </router-link>
                      </li>
                      <li class="marg-15">
                        <router-link :to="{name:'Blog_details'}">
                          <i class="fa fa-angle-right" aria-hidden="true"></i> There Are Many Variations
                        </router-link>
                      </li>
                      <li class="marg-15">
                        <router-link :to="{name:'Blog_details'}">
                          <i class="fa fa-angle-right" aria-hidden="true"></i> it has survived not only five
                        </router-link>
                      </li>
                      <li class="marg-15">
                        <a :to="{name:'Blog_details'}">
                          <i class="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum has been the.
                        </a>
                      </li>
                      <li class="marg-15">
                        <router-link :to="{name:'Blog_details'}">
                          <i class="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum is random.
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sidebar-space">
                  <h4 class="blog-title">Popular Tag</h4>
                  <div class="blog-divider"></div>
                  <div class="tags marg-20">
                    <a href="#"><span class="badge badge-theme">Responsive design</span></a>
                    <a href="#"><span class="badge badge-theme">Color options</span></a>
                    <a href="#"><span class="badge badge-theme">Multiple demos</span></a>
                    <a href="#"><span class="badge badge-theme">Dedicated support</span></a>
                    <a href="#"><span class="badge badge-theme">Documentation</span></a>
                    <a href="#"><span class="badge badge-theme">PSD is included</span></a>
                    <a href="#"><span class="badge badge-theme">Text</span></a>
                    <a href="#"><span class="badge badge-theme">Support</span></a>
                    <a href="#"><span class="badge badge-theme">Responsive</span></a>
                    <a href="#"><span class="badge badge-theme">Design</span></a>
                  </div>
                </div>
                <h4 class="blog-title">Recent Post</h4>
                <div class="blog-divider"></div>
                <div class="recent-blog marg-20">
                  <div class="media">
                    <img class="mr-3" :src='"../assets/images/blog/1.jpg"' alt="blog">
                    <div class="media-body">
                      <router-link :to="{name:'Blog_details'}">
                        <h5 class="mt-0">Lorem Ipsum Is Simply Dummy</h5>
                      </router-link>
                      <p class="m-0">05 March 2011</p>
                    </div>
                  </div>
                  <div class="media">
                    <img class="mr-3" :src='"../assets/images/blog/2.jpg"' alt="blog">
                    <div class="media-body">
                      <router-link :to="{name:'Blog_details'}">
                        <h5 class="mt-0">Lorem Ipsum has been the</h5>
                      </router-link>
                      <p class="m-0">14 january 2015</p>
                    </div>
                  </div>
                  <div class="media">
                    <img class="mr-3" :src='"../assets/images/blog/3.jpg"' alt="blog">
                    <div class="media-body">
                      <router-link :to="{name:'Blog_details'}">
                        <h5 class="mt-0">all the Lorem Ipsum Generator</h5>
                      </router-link>
                      <p class="m-0">30 November 2015</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--blog Section End-->

      <!--Footer Section start-->
      <Footer/>
      <js/>
      <!--Footer Section End-->

    </div>
    <!--blog right Section end-->
  </div>
</template>
<script>
export default {
  name: 'Blog_rightside',
};
</script>
