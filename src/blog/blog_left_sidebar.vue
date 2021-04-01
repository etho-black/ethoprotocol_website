<template>
  <div>

    <!--blog Section start-->
    <div class="page-margin">

      <!--breadcrumb start-->
      <div class="breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-text-center d-align-center">
              <h2 class="title">Left<span> Sidebar</span></h2>
            </div>
            <div class="col-md-6 col-sm-12 col-text-center">
              <nav aria-label="breadcrumb" class="blog-bradcrumb ">
                <ol class="breadcrumb bg-transparent mb-0">
                  <li class="breadcrumb-item"><router-link :to='"/tovo"'>Home</router-link></li>
                  <li class="breadcrumb-item"><router-link :to='"/tovo/blog-list"'>Blog</router-link></li>
                  <li class="breadcrumb-item active"><a href="#">Blog Details with Left Sidebar</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--breadcrumb end -->

      <!--blog Section starts -->
      <section>
        <div class="container">
          <div class="row">

            <!-- blog details starts -->
            <div class="col-sm-12 col-md-8 col-lg-9">
              <div class="blog-item">
                <div class="blog-block">
                  <div class="blog-box">
                    <div class="overflow-hidden">
                      <img :src='"../assets/images/blog/blog-details.jpg"' alt="blog" class="img-fluid">
                    </div>
                  </div>
                </div>
                <div class="blog-text">
                  <h6>25 january 2018</h6>
                  <a href="#">
                    <h3 class="blog-head">There are many variations of passages of Lorem Ipsum available, </h3>
                  </a>
                  <div class="blog-divider"></div>
                  <div class="blog-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h5>Mark jkcno</h5><h5 class="pull-right"> 10 <i class="fa fa-heart-o"></i>, 50 <i class="fa fa-comments-o"></i></h5>
                  </div>
                </div>
              </div>
              <div class="blog-divider"></div>

              <!-- Comment section -->
              <div class="reply-comment">
                <div class="media">
                  <img class="align-self-top mr-3" :src='"../assets/images/blog/blog-comment.jpg"' alt="blog">
                  <div class="media-body">
                   <router-link :to="{ name: 'Blog_details' }">
                      <h5 class="mt-0">Lorem Ipsum Is Simply Dummy</h5>
                   </router-link>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                  </div>
                </div>
                <div class="media">
                  <img class="align-self-top mr-3" :src='"../assets/images/blog/blog-comment-two.jpg"' alt="blog">
                  <div class="media-body">
                   <router-link :to="{ name: 'Blog_details' }">
                      <h5 class="mt-0">Lorem Ipsum has been the</h5>
                   </router-link>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </p>
                  </div>
                </div>
                <div class="media">
                  <img class="align-self-top mr-3" :src='"../assets/images/blog/blog-comment-three.jpg"' alt="blog">
                  <div class="media-body">
                   <router-link :to="{ name: 'Blog_details' }">
                      <h5 class="mt-0">all the Lorem Ipsum Generator</h5>
                   </router-link>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                  </div>
                </div>
              </div>
              <!-- Comment section end -->
              <div class="blog-divider"></div>
              <!-- leave comment sectopn starts -->
              <div class="row">
                <div class="col-md-10 offset-md-1 leave-coment">
                  <h3 class="text-center">Leave Your Comment</h3>
                  <form class="theme-form footer-form p-0 mt-3">
                    <div class="form-group">
                      <div class="row">
                        <div class="col-lg-6 col-md-12 md-fgrup-margin">
                          <input type="text" class="form-control" placeholder="your name">
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email address">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="message"></textarea>
                    </div>
                    <div class="form-button">
                      <button type="submit" class="btn btn-custom theme-color">send</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- leave comment section end -->
            </div>
            <!-- blog details end -->

            <!-- sidebar starts -->
            <div class="col-md-4 col-lg-3 order-md-first list-sidebar">
              <div class="sidebar">
                <div class="sidebar-space">
                  <h4 class="blog-title">blog Category</h4>
                  <div class="blog-divider"></div>
                  <div class="blog-cat-detail">
                    <ul>
                      <li class="marg-15">
                       <router-link :to="{ name: 'Blog_details' }">
                          <i class="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum is simply
                       </router-link>
                      </li>
                      <li class="marg-15">
                       <router-link :to="{ name: 'Blog_details' }">
                          <i class="fa fa-angle-right" aria-hidden="true"></i> There Are Many Variations
                       </router-link>
                      </li>
                      <li class="marg-15">
                       <router-link :to="{ name: 'Blog_details' }">
                          <i class="fa fa-angle-right" aria-hidden="true"></i> it has survived not only five
                       </router-link>
                      </li>
                      <li class="marg-15">
                       <router-link :to="{ name: 'Blog_details' }">
                          <i class="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum has been the.
                       </router-link>
                      </li>
                      <li class="marg-15">
                       <router-link :to="{ name: 'Blog_details' }">
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
                     <router-link :to="{ name: 'Blog_details' }">
                        <h5 class="mt-0">Lorem Ipsum Is Simply Dummy</h5>
                     </router-link>
                      <p class="m-0">05 March 2011</p>
                    </div>
                  </div>
                  <div class="media">
                    <img class="mr-3" :src='"../assets/images/blog/2.jpg"' alt="blog">
                    <div class="media-body">
                     <router-link :to="{ name: 'Blog_details' }">
                        <h5 class="mt-0">Lorem Ipsum has been the</h5>
                     </router-link>
                      <p class="m-0">14 january 2015</p>
                    </div>
                  </div>
                  <div class="media">
                    <img class="mr-3" :src='"../assets/images/blog/3.jpg"' alt="blog">
                    <div class="media-body">
                     <router-link :to="{ name: 'Blog_details' }">
                        <h5 class="mt-0">all the Lorem Ipsum</h5>
                     </router-link>
                      <p class="m-0">30 November 2015</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- sidebar end -->
          </div>
        </div>
      </section>
      <!-- blog Section End -->

      <!--Footer Section start-->
      <Footer/>
      <js/>
      <!--Footer Section End-->

    </div>
    <!--blog Section end-->
  </div>
</template>
<script>
export default {
  name: 'BlogLeftSidebar',
};
</script>
