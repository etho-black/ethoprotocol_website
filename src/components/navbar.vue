<template>
<b-navbar type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top" v-b-scrollspy:nav-scroller>
  <div class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="navbar-brand" :to="{name:'Main_page'}"><img :src='"../assets/images/etho/logo.png"' height="60" alt="logo"></b-navbar-brand>
    <b-collapse class="default-nav" is-nav id="nav_collapse">
      <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
        <b-nav-item href="#home">Home</b-nav-item>
        <b-nav-item style="cursor: pointer;" @click="openNodes">Nodes</b-nav-item>
        <b-nav-item style="cursor: pointer;" @click="openUploads">Uploads</b-nav-item>
        <b-nav-item style="cursor: pointer;" @click="openStaking">Staking</b-nav-item>

        <b-nav-item-dropdown right-alignment text="wallets" class="nav-link">
          <b-dropdown-item class="nav-link" :href='"https://apps.apple.com/us/app/nextshore-ether-1-wallet/id1521802485#?platform=iphone"' target="_blank">Wallet (iOS)</b-dropdown-item>
          <b-dropdown-item class="nav-link" :href='"https://play.google.com/store/apps/details?id=app.web.nextshore_ether1&hl=en&gl=US"' target="_blank">Wallet (Android)</b-dropdown-item>
          <b-dropdown-item class="nav-link" :href='"https://wallet.ether1.org/"' target="_blank">Web Wallet</b-dropdown-item>
          <b-dropdown-item class="nav-link" :href='"https://github.com/Ether1Project/Ether1DesktopWallet"' target="_blank">Desktop Wallet</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right-alignment text="explorers" class="nav-link">
          <b-dropdown-item class="nav-link" style="cursor: pointer;" @click="openExplorer1">Explorer 1</b-dropdown-item>
          <b-dropdown-item class="nav-link" style="cursor: pointer;" @click="openExplorer2">Explorer 2</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#team">Team</b-nav-item>

        <b-nav-item-dropdown right-alignment text="Where to buy etho" class="nav-link">
          <b-dropdown-item class="nav-link" :href='"#exchanges"'>Exchanges</b-dropdown-item>
          <b-dropdown-item class="nav-link" :to="'#swaps'">Swaps</b-dropdown-item>
          <b-dropdown-item class="nav-link" :to="'#bridges'">Bridges</b-dropdown-item>
        </b-nav-item-dropdown>
		
		<b-nav-item-dropdown right-alignment text="Links" class="nav-link">
          <b-dropdown-item class="nav-link" :href='"../assets/images/whitepaper.pdf"' target="_blank">Whitepaper</b-dropdown-item>
          <b-dropdown-item class="nav-link" :href='"../assets/images/ethoblack2021roadmap.jpeg"' target="_blank">Roadmap</b-dropdown-item>
          <b-dropdown-item class="nav-link" :href='"../assets/images/pitchdeck.pdf"' target="_blank">Pitchdeck</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </div>
</b-navbar>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    openStaking() {
      window.open('https://staking.ethofs.com');
    },
    openUploads() {
      window.open('https://uploads.ethoprotocol.com');
    },
    openNodes() {
      window.open('https://nodes.ether1.org');
    },
    openExplorer1() {
      window.open('https://explorer.ether1.org/');
    },
    openExplorer2() {
      window.open('https://blocks.ether1.org/home');
    },
  },
};
</script>
