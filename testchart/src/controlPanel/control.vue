<template>
  <div id="app" class="control">  
    <key v-for="key in keyList" :key="key.id" :turn-command="key.turnCommand" :key-class="key.keyClass"></key>
    <edge  v-for="edge in edgeList" :key="edge.id" :edge-text="edge.edgeText" :edge-type="edge.edgeType"></edge>
    <div class="function">
          <func v-for="func in funcList" :key="func.id" :func-text="func.funcText" :func-class="func.funcClass" :func-seen="func.seen" 
          :func-path="func.funcPath"></func>     
    </div>
    <turn></turn>
   
  </div>
</template>

<script>
import func from './func.vue';
import edge from './edge.vue';
import key from './key.vue';
import turn from './turn.vue';
export default {
  name: 'control',
  data(){
    return {
      funcList:[
        { id:'1',funcClass: 'control-button', funcText: '通 道 控 制',funcPath:''},
        { id:'2',funcClass: 'video', funcText: '录 像',funcPath:''},
        { id:'3', funcClass: 'view',  funcText: '全 景',funcPath:''},
        { id:'4',funcClass: 'photo', funcText:  '抓 拍' ,funcPath:'src/assets/photo.png'},
        { id:'5', funcClass: 'recycle',funcText: '回 收' ,funcPath:'src/assets/recycle.png'},
        { id:'6',funcClass: 'photo', funcText: '对 讲' ,funcPath:'src/assets/call.png'},
        { id:'7',funcClass: 'recycle', funcText: '监 听' ,funcPath:'src/assets/listen.png'},
        { id:'8', funcClass: 'volume', funcText: '音 量',funcPath:''}

      ],
       edgeList:[
        { id:'1', edgeText: '边 距',edgeType:'2'},
        {id:'2',  edgeText: '焦 距' ,edgeType:'1'}
        
      ],
     keyList:[
        { id:'1',keyClass: 'up', turnCommand:'21'},
        { id:'2',keyClass: 'center',turnCommand:'22'},
        {id:'3', keyClass: 'left', turnCommand:'23'},
        { id:'4',keyClass: 'right',turnCommand:'24'},
        {id:'5', keyClass: 'down',turnCommand:''}

      ]
    }
  },
  components:{
    'func':func,
    'edge':edge,
    'key':key,
    'turn':turn
  }
}
</script>

<style scoped>
.control{
  background-image: url(../assets/backGround.png) ;
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;;
  width:300px;
  height:490px;
  color:white;
  text-align: center;
  padding-top: 20px;
}
</style>

