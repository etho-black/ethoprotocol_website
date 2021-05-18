<template>
  <div>
    <!-- medium Section Start -->
    <section id="blog" class="blog">
      <div class="about-decor">
        <div class="about-circle1"><img :src='"../assets/images/team1.png"' alt=""></div>
        <div class="about-circle2"><img :src='"../assets/images/main-banner1.png"' alt=""></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="title">Latest From <span>The Etho Protocol</span></h2>
          </div>
          <div class="col-sm-12">
            <div id="medium-widget"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- medium Section End -->
  </div>
</template>
<script>
export default {
  name: 'Medium',
  mounted() {
    let mediumScript1 = document.createElement('script')
    mediumScript1.setAttribute('src', 'https://medium-widget.pixelpoint.io/widget.js')
    document.head.appendChild(mediumScript1)
    
    mediumScript1.onload = function() {
      let mediumScript2 = document.createElement('script')
      mediumScript2.innerText = 'MediumWidget.Init({renderTo: "#medium-widget", params: {"resource":"https://medium.com/@ethoprotocol","postsPerLine":2,"limit":4,"picture":"big","fields":["description","author","claps","publishAt"],"ratio":"landscape"}})';
      document.head.appendChild(mediumScript2)
    }
  },
}
</script>