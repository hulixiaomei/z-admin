<template>
  <div :class="funcClass">
   <div class="image"> <img alt="" :src="funcPath" > </div> 
    {{funcText}}
  </div>
</template>

<script>
export default {
  name: 'func',
  props:['funcText','funcClass','funcPath']
}
</script>

<style scoped>
.control-button{
  background-color: #B0B0B0;
  border-radius: 50px;
  height:28px;
  width:130px;
  margin-top: 10px;
  margin-left: 85px;
}

.video{
  float:left;
  height:28px;
  width:98px;
  background-color:#C61F27; 
  border-radius: 50px;
  margin-top: 13px;
  margin-left: 50px;
}
.view{
  height:28px;
  width:98px;
  background-color:#DFBF0C; 
  border-radius: 50px;
  margin-top: 13px;
  margin-left: 155px;
}
.photo{
  float:left;
  height:28px;
  width:98px;
  background-color:#78BC27; 
  border-radius: 50px;
  margin-top: 6px;
  margin-left: 50px;
}
 .recycle{
  margin-left:280px;
  height:28px;
  width:98px;
  background-color:#78BC27; 
  border-radius: 50px;
  margin-top: 6px;
  margin-left: 155px;
}

.volume{
  height:28px;
  width:98px;
  background-color:#C2A815; 
  border-radius: 50px;
  margin-left: 100px;
  margin-top: 13px;
}
.image{
  float:left;
  padding-left: 10px;
  margin-top: 5px;
}
</style>