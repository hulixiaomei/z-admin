 <template>
  
    <div class="button">
    	<div :class="keyClass" @click="turnLocation()"></div>	
    </div>
</template>

<script>
export default {
  name: 'key',  
   props:['keyClass','turnCommand'],
   methods: {
	  turnLocation:function() {
	    this.$ajax({
	      method: 'post',
	      url:'/work/fire/cloudBaseControl',
	      data: {
	      	 command:this.turnCommand//接收父组件传过来的command值
	      }
	   }).then(function(response){
   			 console.log(response);
  	   });
	  }
	}
 
}
</script>

<style scoped>
.button .up{
	width:65px;
	height:36px;
	background-image:url(../assets/up.png);
	margin-left:115px;
}
.button .down{
	width:65px;
	height:36px;
	margin-left:115px;
	margin-top:13px;
	background-image:url(../assets/down.png);
}
.button .left{
	margin-top:-50px;
	margin-left:80px;
	float:left;
	height:65px;
	width:36px;
	background-image:url(../assets/left.png);
}
.button .right{
	float:right; 
	margin-top:-50px;
	margin-right:82px;
	height:65px;
	width:36px;
	background-image:url(../assets/right.png);
}
 .button .center{
	margin-left:135px;
	margin-top:20px;
	width:28px;
	height:28px;
	background-image:url(../assets/center.png);
}
</style>
