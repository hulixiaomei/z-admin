<template>
	<div>
		<header>
			<div class="container">
				<h1>
					<a href="#">
						<img src="../assets/images/goldidea-log-big.svg" class="nav-logo"></img>
					</a>
				</h1>
				<nav class="nav">
					<div  >
						<li class="fa fa-align-justify" />
					</div>
				</nav>
			</div>
		</header>
	</div>
</template>

<style scoped lang="scss">
	header {
		min-height: 50px;
		height: 50px;
		background-color: rgba(32, 160, 220, 1);
		color: #fff;
		top: 0;
		left: 0;
		width: 100%;
		line-height: 50px;
		z-index: 100;
		position: relative;
		.container {
			height: 100%;
			box-sizing: border-box;
			margin-left: 60px;
		}
		h1 {
			margin: 0;
			float: left;
			font-size: 32px;
			font-weight: normal;
			a {
				color: #fff;
				text-decoration: none;
				display: block;
			}
			span {
				font-size: 12px;
				display: inline-block;
				width: 34px;
				height: 18px;
				border: 1px solid rgba(255, 255, 255, .5);
				text-align: center;
				line-height: 18px;
				vertical-align: middle;
				margin-left: 10px;
				border-radius: 3px;
			}
		}
		.nav-logo,
		.nav-logo-small {
			vertical-align: sub;
		}
		.nav-logo-small {
			display: none;
		}
		.nav {
			transition: margin-left .3s ease-in-out;
			margin-bottom: 0;
			margin-left: 220px;
			border: none;
			min-height: 50px;
			border-radius: 0;
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				collapsed: false,

			}
		},
		methods: {
			handleOpen() {
				console.log('handleopen')
			},
			handleClose() {
				console.log('handleclose')
			},
			handleSelect() {

			}
		}
	}
</script>