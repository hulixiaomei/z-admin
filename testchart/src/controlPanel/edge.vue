<template>
  <div class="edge">
    	<add :add-type="edgeType"></add>
    	<sline></sline>
    	<div class="content">{{edgeText}}</div>
    	<sline></sline>
      <minus :minus-type="edgeType"></minus>
  </div>
</template>

<script>
import add from './add.vue';
import minus from './minus.vue';
import sline from './sline.vue';
export default {
  name: 'edge',
  props:['edgeText','edgeClass','edgeType'],

  components:{
  	'add':add,
  	'minus':minus,
	  'sline':sline
  }
 
}
</script>

<style scoped>
.edge{
  background-color: #78BC27;
  border-radius: 50px;
  height:28px;
  width:200px;
  margin-top: 20px;
  margin-left: 50px;
}
 .content{
  float:left;
  margin-left:35px;
  margin-top:2px;
  margin-right: 35px;
}
</style>
