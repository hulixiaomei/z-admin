<template>
      <div>
	<span>
		{{mon}}
	</span><br/>
	<input type="text" v-model="money">
      </div>
</template>
<script type="text/javascript">
	export default{
		name:'money',
		data(){
			return {
				money:""
			}
		},
		computed:{
                   mon:function(){
                       return this.money;
                    }
                }
	}
</script>

<style type="text/css" scoped>
	
</style>