<template>
    <div class="full-page">
      <!-- Download -->
      <section class="authentication-form download">
        <div class="innerpage-decor">
          <div class="innerpage-circle1"><img :src='"../assets/images/Testimonial2.png"' alt=""></div>
          <div class="innerpage-circle2"><img :src='"../assets/images/Testimonial1.png"' alt=""></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-center">
                <img :src='"../assets/images/down.png"' class="img-fluid downlod-img" alt="">
                <div class="col-lg-8 offset-lg-2">
                  <h2>Your download should begin automatically</h2>
                </div>
                <h3>If it doesn’t start automatically, <a href="#" class="manual-down">please click here to downlaod manually.</a></h3>

              </div>
            </div>
          </div>
          <!-- copy-right-section -->
          <footer class="bg-light">
          </footer>

          <!-- start color select tag-->
          <color/>
          <!-- end color select tag-->
          <!--end copy right section-->
        </div>

      </section>
      <!-- Download end -->
    </div>
</template>
<script>
export default {
  name:'download',
}
</script>
