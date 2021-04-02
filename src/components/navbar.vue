<template>
  <b-navbar type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top"  v-b-scrollspy:nav-scroller>
    <div class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="navbar-brand" :to="{name:'Main_page'}"><img :src='"../assets/images/etho/logo.png"' height="60" alt="logo"></b-navbar-brand>
    <b-collapse class="default-nav"  is-nav id="nav_collapse">
      <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item href="#home">Home</b-nav-item>
          <b-nav-item href="https://nodes.ether1.org">Nodes</b-nav-item>
          <b-nav-item href="https://staking.ethofs.com">Staking</b-nav-item>

          <b-nav-item-dropdown right-alignment text="wallets" class="nav-link">
            <b-dropdown-item class="nav-link" :href='"#blog"'>Mobile Wallet</b-dropdown-item>
            <b-dropdown-item class="nav-link" :to="{name:'blog_list'}" >Web Wallet</b-dropdown-item>
            <b-dropdown-item class="nav-link" :to="{name:'blog_list'}" >Desktop Wallet</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right-alignment text="explorers" class="nav-link">
            <b-dropdown-item class="nav-link"   :href='"https://explorer.ether1.org/" '>Explorer 1</b-dropdown-item>
            <b-dropdown-item class="nav-link"  :href='"https://blocks.ether1.org/home" '>Explorer 2</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#team">Team</b-nav-item>
          <b-nav-item href="#partners">Partners</b-nav-item>

          <b-nav-item-dropdown right-alignment text="buy etho" class="nav-link">
            <b-dropdown-item class="nav-link"   :href='"#exchanges"'>Exchanges</b-dropdown-item>
            <b-dropdown-item class="nav-link"  :to="'#swaps'" >Swaps</b-dropdown-item>
            <b-dropdown-item class="nav-link"  :to="'#bridges'" >Bridges</b-dropdown-item>
          </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>
<script>

export default {
  name: 'Navbar',
};
</script>
