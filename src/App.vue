<template>
  <div id="app">
    <MainPane/>
  </div>
</template>

<script>
import MainPane from '@/components/MainPane'

export default {
  name: 'App',
  components: {
    MainPane
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
