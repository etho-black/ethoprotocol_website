  <template>
  <div>
  <!-- home section -->
  <section class="back-img ">
    <div class="landing-circle">
      <div class="landing-circle1"><img :src='"../assets/images/main-banner3.png"' alt=""></div>
      <div class="landing-circle2"><img :src='"../assets/images/main-banner12.png"' alt=""></div>
      <div class="landing-circle3"><img :src='"../assets/images/main-banner1.png"' alt=""></div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-xl-3 offset-xl-2">
          <div class="home-contain">
            <div class="fadeInLeft-land-caption">
              <img :src='"../assets/images/landing-logo.png"' alt="logo" class="main-logo">
              <p class="landing-caption">Amazing Landing page with <span>Easy Customization</span></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-6 offset-xl-1 sm-d-none">
          <div class="home-contain fadeIn-mac">
            <!-- Tile js start -->
            <Tile :max="30" :image = '"mac.png"'/>
            <!-- Tile js end -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- home section end -->

  <!-- home demo section -->
  <section class="fadinup" id="home-demo">
    <div class="container-fluid m-width">
      <div class="row">
        <div class="col-md-12">
          <h2 class="landing-title">choose demo</h2>
          <div class="border-shape"></div>
        </div>
        <div class="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
          <p class="demo-description">Clean and clear designs makes websites differ from others. We've pre-build demo for giving you as much as flexibility in making your site unique.</p>
        </div>
      </div>
      <div class="row mt-35 landing-screen-animation">
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
           <router-link target="_blank" :to="{ name: 'Home_one' }" class="nav-link">
                <span class="pc-bg">
                   <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/index.jpg') + '\')'}" class="img-scroll"></span>
                </span>
           </router-link>
          </div>
          <h2 class="demo-title">Demo 1</h2>

        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link target="_blank" :to="{ name: 'Home_two' }" class="nav-link">
                        <span class="pc-bg">
                          <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/index-2.jpg') + '\')'}" class="img-scroll"></span>
                      </span>
            </router-link>
          </div>
          <h2 class="demo-title">Demo 2</h2>

        </div>
        <div class="col-xl-4 col-lg-6 offset-lg-3 offset-xl-0 col-12 text-center">
          <div>
            <router-link target="_blank" :to="{ name: 'Home_three' }" class="nav-link" >
                  <span class="pc-bg">
                    <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/index-3.jpg') + '\')'}" class="img-scroll"></span>
                  </span>
            </router-link>
          </div>
          <h2 class="demo-title">Demo 3</h2>
        </div>
      </div>
    </div>
  </section>
  <!-- home demo section end -->

  <!-- other page section  -->
  <section class="fadin-blog pt-0">
    <div class="container m-width">
      <div class="row">
        <div class="col-md-12">
          <h2 class="landing-title">Other Pages</h2>
          <div class="border-shape"></div>
        </div>
      </div>
      <div class="row mt-35 pages-space">
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "blog_list" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/blog.jpg') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">blog-details 1</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "Blog_details" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/blog-details.jpg') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">blog-details 2</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "Blog_leftside" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/blogs-leftside.jpg') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">blog-details 3</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "Blog_rightside" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/blogs-rightside.jpg') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">blog-details 4</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "BlogLeftSidebar" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/blog-details-with-leftsidebar.jpg') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">blog-details 5</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "BlogrightSidebar" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/blog-details-with-rightsidebar.jpg') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">blog-details 6</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "Signin" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/sign-in.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">Sign In</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "Signup" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/sign-up.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">Sign up</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "ForgetPassword" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/forget-pwd.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">Forget Password</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "Thankyou" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/thank-you.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">Thank You</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "Review" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/review.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">Review</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "pagenotfound" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/404.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">404 Not page</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "Faq" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/faq.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">FAQ page</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "download" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/download.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">Download page</h2>
        </div>
        <div class="col-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "coming_soon" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/coming-soon.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">Coming soon page</h2>
        </div>
        <div class="col-xl-4 offset-xl-4 col-lg-6 col-12 text-center">
          <div>
            <router-link  :to='{ name: "Emailtemplate" }' target="_blank" class="nav-link">
                <span class="pc-bg">
                  <span :style="{ 'backgroundImage': 'url(\'' + require('../assets/images/demo/email.png') + '\')'}" class="img-scroll"></span>
                </span>
            </router-link>
          </div>
          <h2 class="demo-title">Email Template</h2>
        </div>
      </div>
    </div>
  </section>
  <!-- other page section end -->

  <!-- main feature section -->
  <section id="feature" class="features-bg mb-0">
    <div class="container m-width">
      <div class="row">
        <div class="col-md-12">
          <h2 class="landing-title">Theme Features</h2>
          <div class="border-shape"></div>
          <div class="mt-50">
            <ul class="features m-0 p-0 fadeIn-features">
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/vue.png"' class="img-fluid" alt="html5">
                  <h3 class="features-title">Vue js</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/css-3.png"' class="img-fluid" alt="css">
                  <h3 class="features-title">Css 3</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/bootstrap-4.png"' class="img-fluid" alt="bootstrap-4">
                  <h3 class="features-title">bootstrap 4</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/animate-css.png"' class="img-fluid" alt="animate-css">
                  <h3 class="features-title">Animate css</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/responsive.png"' class="img-fluid" alt="responsive">
                  <h3 class="features-title">Responsive</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/multiple-blog-layouts.png"' class="img-fluid" alt="multiple-blog">
                  <h3 class="features-title">Multiple Blog Layouts</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/fullpage-js.png"' class="img-fluid" alt="fullpage">
                  <h3 class="features-title">One Page Layout</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/three-type-home-page.png"' class="img-fluid" alt="three-homepage">
                  <h3 class="features-title">three type home page</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/color-management.png"' class="img-fluid" alt="color-management">
                  <h3 class="features-title">color management</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/google-fonts-support.png"' class="img-fluid" alt="Google-fonts">
                  <h3 class="features-title">Google fonts support</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/w3c-validation.png"' class="img-fluid" alt="w3c-validation">
                  <h3 class="features-title">W3C Validation</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/social-links.png"' class="img-fluid" alt="social-links">
                  <h3 class="features-title">Social Links</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/google-map.png"' class="img-fluid" alt="Google-Map">
                  <h3 class="features-title">Google Map</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/pixel-perfect-design.png"' class="img-fluid" alt="Pixel-Perfect">
                  <h3 class="features-title">Pixel Perfect Design</h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/all-broweser-support.png"' class="img-fluid" alt="browser-support">
                  <h3 class="features-title">all browser support </h3>
                </div>
              </li>
              <li>
                <div class="features-img">
                  <img :src='"../assets/images/features/typography.png"' class="img-fluid" alt="Typography">
                  <h3 class="features-title">Typography</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- main feature section end -->

  <!-- template section  -->
  <section class="template-bg pb-0 m-0">
    <div class="container m-width">
      <div class="row">
        <div class="col-xl-5 offset-xl-1 col-md-6 ">
          <div class="tamp-d-flex">
            <div class="center-sm ">
              <h2 class="tapl-title fadeInLeft-land-caption">Stop thinking, Just grab it</h2>
              <a href="#"  class="btn btn-custom theme-color rounded-5 fade-button">Download</a>
            </div>
          </div>
        </div>
        <div class="col-xl-5 offset-xl-1 col-md-6 ">
          <div class="garb-img">
            <a :href='"/tovo"'><img :src='"../assets/images/landing/template.png"' alt="template" class="img-fluid"></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- template section end -->

  <!-- Rate template section  -->
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="tamp-d-flex">
            <div>
              <p class="coming-title rating-title">If you love this template please rate us</p>
              <div class="rating-star">
                <img :src='"../assets/images/star.png"' alt="star">
                <img :src='"../assets/images/star.png"' alt="star">
                <img :src='"../assets/images/star.png"' alt="star">
                <img :src='"../assets/images/star.png"' alt="star">
                <img :src='"../assets/images/star.png"' alt="star">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Rate template section end -->

  </div>
</template>
<script>

export default {
  name: 'Main_page',
}
</script>
