 <template>
 <div class="turn">
    	<add></add>
    	<sline class="xline"></sline>
    	<minus ></minus>
   </div>
</template>

<script>
import add from './add.vue';
import minus from './minus.vue';
import sline from './sline.vue';
export default {
  name: 'turn',
 components:{
  	'add':add,
  	'minus':minus,
	  'sline':sline
  }
}
</script>

<style scoped>
.turn{
  background-color: #B0B0B0;
  border-radius: 50px;
  height:28px;
  width:200px;
  margin-top: 10px;
  margin-left: 50px;
}
.add{
  float:left;
  margin-left: 30px;
}
.xline{
  margin-left: 30px;
}
</style>
