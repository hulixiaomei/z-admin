<template>
  <div id="video-show">
    <camera></camera>
  </div>
</template>

<script>
import Camera from './Camera';
export default {
  name: 'VideoShow',
  components: {
    'camera':Camera
  } 
}
</script>

<style scoped>
#video-show {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
