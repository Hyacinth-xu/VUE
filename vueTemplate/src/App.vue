<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import "./assets/css/reset.css";
@import "./assets/css/vant-customer.less";
@import "./assets/css/common.less";

#app {
  max-width: 768px;
  margin: 0 auto;
}
</style>
