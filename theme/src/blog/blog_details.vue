<template>
  <div>
    <!--blog Section start-->
    <div class="page-margin">
      <!--breadcrumb start-->
      <div class="breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-text-center d-align-center">
              <h2 class="title">blog<span> Details</span></h2>
            </div>
            <div class="col-md-6 col-sm-6 col-text-center">
              <nav aria-label="breadcrumb" class="blog-bradcrumb ">
                <ol class="breadcrumb bg-transparent mb-0">
                  <li class="breadcrumb-item"><router-link :to='"/tovo"'>Home</router-link></li>
                  <li class="breadcrumb-item active"><router-link :to='"#"'>Blog Details</router-link></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--breadcrumb end -->

      <!-- blog Section starts -->
      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="blog-item">
                <div class="blog-block">
                  <div class="blog-box">
                    <div class="overflow-hidden">
                      <a href="#">
                        <img :src='"../assets/images/blog/blog-details.jpg"' alt="blog" class="img-fluid">
                      </a>
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
              <div class="reply-comment">
                <div class="media">
                  <img class="align-self-top mr-3" :src='"../assets/images/blog/blog-comment.jpg"' alt="blog">
                  <div class="media-body">
                    <router-link  :to="{name:'Blog_details'}">
                      <h5 class="mt-0">Lorem Ipsum Is Simply Dummy</h5>
                    </router-link>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Donec sed odio dui.</p>
                  </div>
                </div>
                <div class="media">
                  <img class="align-self-top mr-3" :src='"../assets/images/blog/blog-comment-two.jpg"' alt="blog">
                  <div class="media-body">
                    <router-link  :to="{name:'Blog_details'}">
                      <h5 class="mt-0">Lorem Ipsum has been the</h5>
                    </router-link>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Donec sed odio dui.</p>
                  </div>
                </div>
                <div class="media">
                  <img class="align-self-top mr-3" :src='"../assets/images/blog/blog-comment-three.jpg"' alt="blog">
                  <div class="media-body">
                    <router-link  :to="{name:'Blog_details'}">
                      <h5 class="mt-0">all the Lorem Ipsum Generator</h5>
                    </router-link>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                  </div>
                </div>
              </div>
              <div class="blog-divider"></div>
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
    <!--blog Section end -->
  </div>
</template>
<script>
export default {
  name: 'Blog_details'
}
</script>
