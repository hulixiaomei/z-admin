<template>
  <div id="app" class="top">
      <div class="top_one">
        <span>{{message}}</span>
        <div class="backImage">
          <img src="./assets/MinImage.png"    width="18px" height="3px">
          <img src="./assets/CloseImage.png"  width="18px" height="20px">
        </div>
      </div>
      <div>
    
            <div class="left">
                  <div class="left_one">
                    <control></control>
                  </div>
                  <div class="left_two">
                    <mapDiv></mapDiv>
                  </div>  
            </div>
            <div class="right">
                  <div class="camera" v-for="camera in cameraList" :key="camera.id">
                     <camera :cameraNum="camera.cameraNum"></camera>
                  </div>
            </div>
      </div>
  </div>
</template>

<script>
import control from './controlPanel/control';
import mapDiv from './maps/mapDiv';
import camera from './video/Camera';
export default {
  name: 'app',
  data(){
    return{
       message:'视频监控系统 Video Monitor System',
       cameraList:[
         { id:'1',cameraNum: 'NO.1'},
         { id:'2',cameraNum: 'NO.2'},
         { id:'3',cameraNum: 'NO.3'},
         { id:'4',cameraNum: 'NO.4'}
       ]
     }
  },
  components:{
    'control':control,
    'mapDiv':mapDiv,
    'camera':camera
  }
}
</script>

<style scoped>
.top{
  width: 100%;
  height: 100%;
  border: 0px; 
  background: #116B37;

}
.top_one{
  height: 50PX;
  width: 100%;
  border: 0px;
  color: white;
  font-size: 20px;
  margin-left: 10px;
 }
  .left{
  height:800px;
  width:400px;
  border: 0px;
 }
 .left_one{
  height:535px;
  border: 0px;
  background-image: url(./assets/GradImage.jpg);
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  padding-top: 15px;
  padding-left: 52px;
 }
 .left_two{
  height:310px;
  width: 400px;
  border: 0px;
 background: green;
 }
 .right{
  height: 860px;
  width:1487px;
  border:0px;
  margin-left: 400px;
  margin-top: -800px;
  background: white;
 }
 .camera{
  height: 426px;
  width:735px;
  border:0px;
  background: #78BC27;
  float: left;
  margin-bottom: 8px;
  margin-left: 8px;
 }
 .backImage{
  padding-left: 1800px;
 }
</style>
