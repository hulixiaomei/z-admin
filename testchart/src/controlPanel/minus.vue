 <template>
 <span class="minus" @click="turnDown()"><h3>{{name}}</h3></span>
</template>

<script>
export default {
  name: 'minus',
   props:['minusType'],
 data(){
 	return{
 		name:'—'
 	}
 },
 methods: {
    turnDown:function() {

      this.$ajax({
        method: 'post',
        url: this.loundUrl,
        data: {
           command:'11'
        }
     }).then(function(response){
   			 console.log(response);
  	   });
    }
   },
   computed:{
	     loundUrl:function(){
	      return this.minusType=="1"?"/work/fire/cloudBaseControl":"";
	     }

	  }
}
</script>

<style scoped>
  .minus{
    font-size: 15px;
    width: 200px;
    height: 20px;
  }
  .minus h3{
      margin-top: 5px;
  }
</style>
