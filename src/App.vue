<template>
  <div id="app">
    <router-view>
      <Dashboard/>
    </router-view>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard/Dashboard.vue';
export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
@import './assets/scss/Datatable.scss';
</style>
