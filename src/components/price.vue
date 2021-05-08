<template>
  <div>
    <!-- Price Section start-->
    <section id="price" class="price">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <carousel :className='"price-carousel"'
                      :loop=false
                      :margin=30
                      :items=3
                      :center=false
                      :nav=false
                      :dots=false
                      :dotsEach=false
                      :autoplay=true
                      :responsive="{0:{items:1, dots:true},600:{items:1,dots:true},768:{items:2,dots:true},992:{items:3,nav:false},1000:{items:3,nav:false}}"
            >
              <div class="price-item h-full">
                <div class="price-block h-full">
                  <div><h1 style="font-size: 28px;"><span class="f-bold">Service Node</span></h1>
                  </div>
                  <div class="mrp">
                    <h6 class="user-type">Service Nodes act as a data relay and secure the Ether-1 blockchain</h6>
                    <div class="price-devide"></div>
                    <h2>5000</h2>
                    <h6 class="price-year">ETHO (Collateral)</h6>
                    <div class="price-devide"></div>
                    <h2>{{ sn_reward }}</h2>
                    <h6 class="price-year">ETHO (Daily Reward)</h6>
                    <div class="price-devide"></div>
                  </div>
                  <ul class="price-feature">
                    <li>20 GB Of SSD/HDD Storage</li>
                    <li>1 GB Of Ram</li>
                    <li>Static Public IPv4 Address</li>
                  </ul>
                  <div class="price-filler" />
                  <a href="https://nodes.ethoprotocol.com" target="_blank" class="btn btn-custom theme-color" role="button" >Deploy</a>
                </div>
              </div>
              <div class="price-item h-full">
                <div class="price-block h-full">
                  <div><h1 style="font-size: 28px;"><span class="f-bold">Masternode</span></h1>
                  </div>
                  <div class="mrp">
                    <h6 class="user-type">Master Nodes provide storage and processing resources to the network and secure the Ether-1 blockchain</h6>
                    <div class="price-devide"></div>
                    <h2>15000</h2>
                    <h6 class="price-year">ETHO (Collateral)</h6>
                    <div class="price-devide"></div>
                    <h2>{{ mn_reward }}</h2>
                    <h6 class="price-year">ETHO (Daily Reward)</h6>
                    <div class="price-devide"></div>
                  </div>
                  <ul class="price-feature">
                    <li>40 GB Of SSD/HDD Storage</li>
                    <li>2 GB Of Ram</li>
                    <li>Static Public IPv4 Address</li>
                  </ul>
                  <div class="price-filler" />
                  <a href="https://nodes.ethoprotocol.com" target="_blank" class="btn btn-custom theme-color" role="button" >Deploy</a>
                </div>
                </div>
              <div class="price-item h-full">
                <div class="price-block h-full">
                  <div><h1 style="font-size: 28px;"><span class="f-bold">Gateway Node</span></h1>
                  </div>
                  <div class="mrp">
                    <h6 class="user-type">Gateway Nodes provide storage and processing resources to the network, secure the Ether-1 blockchain, and act a gateway to decentrally hosted ethoFS data on the network</h6>
                    <div class="price-devide"></div>

                    <h2>30000</h2>
                    <h6 class="price-year">ETHO (Collateral)</h6>
                    <div class="price-devide"></div>
                    <h2>{{ gn_reward }}</h2>
                    <h6 class="price-year">ETHO (Daily Reward)</h6>
                    <div class="price-devide"></div>
                  </div>
                  <ul class="price-feature">
                    <li>80 GB Of SSD/HDD Storage</li>
                    <li>4 GB Of Ram</li>
                    <li>Static Public IPv4 Address</li>
                  </ul>
                  <div class="price-filler" />
                  <a href="https://nodes.ethoprotocol.com" target="_blank" class="btn btn-custom theme-color" role="button" >Deploy</a>

                </div>

                  </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
    <!-- Price Section End -->
  </div>
</template>
<script>
import $ from 'jquery';

function getRewardJson(self) {
  $.getJSON('https://ethoprotocol.com/api/ethofsapi.php?api=network_stats', (data) => {
    self.gn_reward = Number(data.gatewaynode_reward).toFixed(3);
    self.mn_reward = Number(data.masternode_reward).toFixed(3);
    self.sn_reward = Number(data.servicenode_reward).toFixed(3);
  });
}

export default {
  name: 'Price',
  data() {
    return {
      gn_reward: 9.954,
      mn_reward: 4.763,
      sn_reward: 2.376,
    };
  },
  methods: {
    GetRewards() {
      getRewardJson(this);
    },
  },
  mounted() {
    this.GetRewards();
  },
};
</script>

<style>
[classname="price-carousel"] .owl-stage {
  display: flex;
}
.price-block {
  display: flex;
  flex-direction: column;
}
.price-filler {
  flex-grow: 1;
  width: 100%;
}
</style>
