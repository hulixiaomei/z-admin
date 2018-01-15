<template>
	<div class="backImg">
		<div>
    		<img alt="" src="../assets/map.jpg" width="400px">
    	</div>
    	<div class="mapWindow">
    		<label>地图窗口</label>
    	</div>
    </div>
</template>

<script type="text/javascript">
	export default {
		name:"mapDiv",
	}
</script>

<style type="text/css" scoped>
.backImg{
	height:975px;
	width:855px;
	position: relative;
}
.mapWindow{
	position: absolute;
	z-index: 3 ;
	margin-top:-315px;
	height:25px;
	width:400px;
	background:green;
	padding-top:1%;
	background: rgba(0,100,0, 0.5);
	text-align: left;
}
.mapWindow label{
	color:white;
	font-weight:bold;
	margin-left:1%;
}
</style>