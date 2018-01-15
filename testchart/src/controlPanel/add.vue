 <template>
 <span class="add" @click="addLound()"><h2>{{name}}</h2></span>

</template>

<script>
export default {
  name: 'add',
   props:['addType'],
 data(){
 	return{
 		name:'+'
 	}
 },
  methods: {
    addLound:function() {
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
	      return this.addType=="1"?"/work/fire/cloudBaseControl":"";
	     }

	  }
  
}
</script>

<style scoped>
.add{
	float:left;
  width: 40px;
  height: 20px;
}

.add h2{
    margin-top: -4px;
}
</style>
