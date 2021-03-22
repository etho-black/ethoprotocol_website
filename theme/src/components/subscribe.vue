<template>
  <div>
    <!--Subscribe section start-->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="footer-text">
              <img :src='"../assets/images/email.png"' alt="email">
              <h2 class="title text-center md-margin-top">subscribe to <span>newsletter</span></h2>
              <p>  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
              <form target="_blank" method="post" action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda" class="footer-form">
                <div class="form-group">
                  <!--<input type="EMAIL" id="mce-EMAIL" class="form-control" required placeholder="enter your email">-->
                  <input class="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Your email address:" type="email" required="required" >
                </div>
                <div class="form-button">
                  <button type="submit"  class="btn btn-custom theme-color">send</button>
                </div>
              </form>



            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Subscribe section Ends-->
  </div>
</template>
<script>
export default {
  name: 'Subscribe'
}
</script>
