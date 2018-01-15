<template>
  <div>
    <camera-time></camera-time>
    <div class="playvideo">
      <play></play>
    </div>
    <div class="num">
      <label>{{cameraNum}}</label>
    </div>
  </div> 
</template>

<script>
  import Play from './Play';
  import CameraTime from './CameraTime';
  export default {
    name:'Camera',
    props:['cameraNum'],
    components: {
       'play':Play,
       'cameraTime':CameraTime
    }
  }
</script>

<style scoped>
  .camera{
    padding: 20px 20px 20px 20px;
  }
  .cameratime{
    text-align: left;
  }
  .cameratime label{
    font-size: 20px;
    color: white;
  }
  .playvideo{
    width: 700px;
    height: 330px;
   margin-left: 17px;
   margin-top: 5px;
  }
  .num{
    float: right;
    margin-top: 35px;
    margin-right: 25px;
  }
  .num label{
    font-size: 20px;
    color: white;
  }
          
</style>