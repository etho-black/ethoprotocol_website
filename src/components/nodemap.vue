<template >
  <!-- NodeMap Start -->
  <section id="nodemap">
    <div class="review-block" style="padding-top:100px; padding-bottom:100px;">

      <div class="container">
        <h2 class="title"><span> ETHO</span> Protocol Node Network</h2>
        <div class="row margin-bottom">
          <div class="col-lg-4 col-md-6">
            <div class="review-box">
              <p style="font-size: 18px;">Active Uploads Contracts: <h1 style="font-size: 28px;"><span class="f-bold">{{ active_contracts }}</span></h1></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="review-box ">
              
              <p style="font-size: 18px;">Available Network Storage: <h1 style="font-size: 28px;"><span class="f-bold">{{ available_storage }} GB</span></h1></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="review-box">
              <p style="font-size: 18px;">Used Network Storage: <h1 style="font-size: 28px;"><span class="f-bold">{{ used_storage }} GB</span></h1></p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="container">
        <div class="row">
          <div class="col-12">
    <GChart
      :settings="{ packages: ['geochart'], mapsApiKey: 'AIzaSyAxXYo_SRindYMr7DOK-wXHdIuMh3xQkqU'}"
      type="GeoChart"
      :data="chartData"
      :options="chartOptions"
    />
        </div>
      </div>
    </div>

    <div class="review-block" style="padding-top:100px; padding-bottom:100px;">

      <div class="container">
        <div class="row margin-bottom">
          <div class="col-lg-4 col-md-6">
            <div class="review-box">
              <p style="font-size: 18px;">Active Service Nodes: <h1 style="font-size: 28px;"><span class="f-bold">{{ sn_count }}</span></h1></p>
            </div>
          </div>   
          <div class="col-lg-4 col-md-6">
            <div class="review-box">
              <p style="font-size: 18px;">Active Masternodes: <h1 style="font-size: 28px;"><span class="f-bold">{{ mn_count }}</span></h1></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="review-box">
              <p style="font-size: 18px;">Active Gateway Nodes: <h1 style="font-size: 28px;"><span class="f-bold">{{ gn_count }}</span></h1></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- NodeMap End -->
</template>
<script>
import { GChart } from 'vue-google-charts';
import $ from 'jquery';

export default {
  name: 'nodemap',
  components: {
    GChart
  },
  mounted() {
    this.getNodeCoordinates(this);
    this.getNetworkStats(this);
  },
  methods: {
    getNetworkStats(self) {
      $.getJSON('https://api.ether1.org/ethofsapi.php?api=network_stats', (data) => {
        self.gn_count = Number(data.active_gatewaynodes);
        self.mn_count = Number(data.active_masternodes);
        self.sn_count = Number(data.active_servicenodes);
        self.active_contracts = Number(data.activeUploadContracts);
        self.available_storage = (Number(data.networkStorageAvailable) / 1000000000).toFixed(2);
        self.used_storage = (Number(data.totalNetworkStorageUsed) / 1000000000).toFixed(2);
      });
    },
    getNodeCoordinates(self) {
      $.getJSON('https://api.ether1.org/ethofsapi.php?api=node_locations', (data) => {
        data.forEach(function(node) {
          var numSwitch = 1;
          if(Math.floor(Math.random() * 2) == 1) {
            numSwitch = -1;
          }

          var randomLatOffset = (Math.floor(Math.random() * 9999)) / 10000 * numSwitch;
          var randomLonOffset = (Math.floor(Math.random() * 9999)) / 10000000 * numSwitch;
          var color;
          var size;

          if(node.type == 'Gateway Node') {
            color = 3;
            size = 1;
          } else if(node.type == 'Masternode') {
            color = 3;
            size = 1;
          }else {
            color = 3;
            size = 1;
          }
          var nodeLocation = [node.latitude + randomLatOffset, node.longitude + randomLonOffset];
          self.chartData.push(nodeLocation);
        })
        console.log(this.chartData);
      });
    }
  },
  data () {
    return {
      gn_count: 448,
      mn_count: 127,
      sn_count: 40,
      active_contracts: 590,
      available_storage: 44737.59,
      used_storage: 58.92,
      chartData: [
        ['LATITUDE', 'LONGITUDE'],
      ],
      chartOptions: {
        displayMode: 'markers',
        responsive: true,
        enableRegionInteractivity: false,
        colorAxis: {colors: ['#971b45']},
        defaultColor: '#971b45',
        legend: 'none',
      }
    }
  },
};
</script>
