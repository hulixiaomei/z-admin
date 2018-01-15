<template>
	<div class="table-container">
		<table width="400" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td>{{name}}</td>
				<td>{{age}}</td>
				<td>{{career.name}}</td>
				<td>{{career.score}}</td>
			</tr>
		</table>		
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'TestGuo',
		data(){
			return {
                name:"guoyx",
                age:23,
                career:{
                	name:'math',
                	score:'60'
                }
			}
		}

	}
</script>

<style type="text/css" scoped>
	.table-container{
        border:1px solid #F00;

	}
</style>