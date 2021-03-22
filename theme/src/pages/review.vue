<template>
  <div>

    <!--blog Section start-->
    <div class="page-margin">

      <!--breadcrumb start-->
      <div class="breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-text-center d-align-center">
              <h2 class="title"><span>Review</span></h2>
            </div>
            <div class="col-md-6 col-sm-6 col-text-center">
              <nav aria-label="breadcrumb" class="blog-bradcrumb ">
                <ol class="breadcrumb bg-transparent mb-0">
                  <li class="breadcrumb-item"><a :href='"/tovo"'>Home</a></li>
                  <li class="breadcrumb-item active"><a href="#">Review</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--breadcrumb end -->
      <!-- sign in -->
      <section>
        <div class="innerpage-decor">
          <div class="innerpage-circle1"><img :src='"../assets/images/Testimonial2.png"' alt=""></div>
          <div class="innerpage-circle2"><img :src='"../assets/images/Testimonial1.png"' alt=""></div>
        </div>
        <div class="review-block">
          <div class="container">
            <div class="row margin-bottom">
              <div class="col-lg-4 col-md-6">
                <div class="review-box">
                  <img :src='"../assets/images/avtar/22.jpg"' alt="review" class="img-fluid">
                  <h5>John Martin</h5>
                  <div class="rating-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="review-message">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="review-box">
                  <img :src='"../assets/images/avtar/1.jpg"' alt="review" class="img-fluid">
                  <h5>John Martin</h5>
                  <div class="rating-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="review-message">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="review-box">
                  <img :src='"../assets/images/avtar/15.jpg"' alt="review" class="img-fluid">
                  <h5>John Martin</h5>
                  <div class="rating-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="review-message">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="review-box">
                  <img :src='"../assets/images/avtar/22.jpg"' alt="review" class="img-fluid">
                  <h5>John Martin</h5>
                  <div class="rating-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="review-message">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="review-box">
                  <img :src='"../assets/images/avtar/15.jpg"' alt="review" class="img-fluid">
                  <h5>John Martin</h5>
                  <div class="rating-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="review-message">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="review-box">
                  <img :src='"../assets/images/avtar/1.jpg"' alt="review" class="img-fluid">
                  <h5>John Martin</h5>
                  <div class="rating-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="review-message">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- sign up -->

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
  name: 'Review'
}
</script>
