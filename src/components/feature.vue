<template>
    <!-- Feature Section start -->
    <section id="feature" class="feature">
      <div class="feature-decor" >
        <div class="feature-circle1"><img :src='"../assets/images/feature2.png"' alt=""></div>
        <div class="competitive-analysis"><img :src='"../assets/images/etho/analysis.png"' alt="" style="position:absolute; top: 200px; left: 5%;"></div>
      </div>
      <div class="container">

        <div class="row">

          <div class="offset-lg-4 col-lg-8">
            <div class="row">
              <div class="col-sm-12 mrgn-md-top">
                <h2 class="title"><span> Etho Protocol</span> Network Features</h2>
              </div>
              <div class="col-12 col-md-6">
                <ul class="feature-style">
                <li>
                    <div class="feature-icon">
                      <img :src='"../assets/images/icon/4.png"' alt="icon">
                    </div>
                    <div class="feature-subtitle">
                      <h3><a href="https://nodes.ether1.org">Deploy a Node and Earn Revenue</a></h3>
                    </div>
                    <div>
                      <p>Help secure the network and provide decentralized storage resources by deploying a node. In return for deploying a node you will earn a reward and share in data hosting revenue. </p>
                    </div>
                  </li>
                  <li>
                    <div class="feature-icon">
                      <img :src='"../assets/images/icon/2.png"' alt="icon">
                    </div>
                    <div class="feature-subtitle">
                      <h3><a href="https://ethofs.com">Censorship-Proof Storage</a></h3>
                    </div>
                    <div>
                      <p>Upload data to the etho network utilizing the <a href="https://ethofs.com">ethoFS upload system</a>. Ethofs provides decentralized, censorship-proof storage and website hosting.</p>
                    </div>
                  </li>

                </ul>
              </div>
              <div class="col-12 col-md-6 sm-m-top">
                <ul class="feature-style">

                  <li>
                    <div class="feature-icon">
                      <img :src='"../assets/images/icon/3.png"' alt="icon">
                    </div>
                    <div class="feature-subtitle">
                      <h3><a href="https://staking.ethofs.com">Participate in Staking or Lending</a></h3>
                    </div>
                    <div>
                      <p>If you hold ETHO and want to earn a return on it you can lend it out as collateral or if you are intersted in running a node but need collateral you can borrow it on the <a href="https://staking.ethofs.com">staking dashboard.</a></p>
                    </div>
                  </li>
                  <li>
                    <div class="feature-icon">
                      <img :src='"../assets/images/icon/1.png"' alt="icon">
                    </div>
                    <div class="feature-subtitle">
                      <h3><a href="https://discordapp.com/invite/MFn9Tmz">Project Governance & Moderation</a></h3>
                    </div>
                    <div>
                      <p>Join us in <a href="https://discordapp.com/invite/MFn9Tmz">Discord</a> or on <a href="https://t.me/Ether_1">Telgram</a> to participate in governance elections and to help build out and maintain the decentralize content moderation system.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Feature Section End -->
</template>
<script>
export default {
  name: 'feature'
}
</script>
