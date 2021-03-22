<template>
    <!-- Contact Section start -->
    <section id="contact" class="contact">
      <div class="contact-decor">
        <div class="contact-circle1"><img :src='"../assets/images/main-banner12.png"' alt=""></div>
        <div class="contact-circle2"><img :src='"../assets/images/main-banner1.png"' alt=""></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8 col-sm-12">
            <div class="contact-us">
              <div class="w-100">
                <h2 class="title"><span>contact </span>information</h2>
                <form id="myform" class="theme-form"  method="get">
                  <div class="form-group">
                    <div class="row">
                      <div id="mail_alert_class" class="alert alert-success alert-dismissible d-none">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <div id="alert_mail">

                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12 col-md-6 md-fgrup-margin">
                        <input type="text" class="form-control" id="fullname" name="fullname" placeholder="your name" required="required">
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <input type="number" class="form-control" id="phone" name="phone" placeholder="phone" required="required">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control"  name="email" id="email" placeholder="email address" required="required">
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" id="message" name="message" rows="4" placeholder="message" required="required"></textarea>
                  </div>
                  <div class="form-button">
                    <input type="button" id="emailsend" name="send" class="btn btn-custom theme-color" value="send" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-medium-none-lg">
            <div class="contact-right">
              <img :src='"../assets/images/Contact-info.png"' class="img-fluid" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section End -->
</template>
<script>
export default {
  name: 'Contact_us'
}
</script>
