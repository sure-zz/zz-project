<template>
	<div class="bgcolor" :style="{backgroundColor:colors}">
		<div class="imgb" :style="{background:imgpath,backgroundSize:'7.5rem auto'}">
			<div class="upimg">
				<div class="msgwrite">
					981-
				</div>
			</div>
			<div class="writemsg">
				
			</div>
		</div>
		<ul class="colorselect">
			<li class="cil"><colorPicker style="border:1px solid #fff;" v-model="colors" v-on:change="headleChangeColor"></colorPicker>选取颜色</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import colorPicker from './vue-color-picker/colorPicker'
	export default {
		components:{
			colorPicker
		},
		data(){
			return {
				name:0,
				imgpath: '',
				colors: '#ddd'
			}
		},
		created(){
			//this.$route.param;
			this.name=this.$route.params.id;
			this.imgpath = "url('../../static/images/"+this.name+".png') no-repeat"
			console.log(this.$route.params)
		},
		methods:{
			headleChangeColor(){
				console.log(this.colors)
			}
		},
		mounted(){

		},
		computed:{

		}
	}
</script>

<style>
	.bgcolor,.imgb{
		position: absolute;height: 100%;width: 7.5rem;
		left: 0px;top: 0px;
	}
	.colorselect{
		position: absolute;
		width:50%;
		top:1.5rem;
		
		font-size: 0.28rem;
	}
	.colorselect li.cil{
		width:45%;
		left:0px;
		height:0.6rem;
		line-height: 0.6rem;
		background: #fff;
		border-radius: 0rem 0.2rem 0.2rem 0rem;
	}
	.upimg{
		font-size: 0.3rem;
		/*width:7.5rem;
		height:100%;*/
		width:4.5rem;
		height:5.5rem;
		margin:3.6rem auto;
		background: url("../../static/images/msgopen.png") no-repeat center bottom;
		background-size: 96% 56%;

	}
	.msgwrite{
		width:80%;
		margin: auto;
		height:4rem;
		background: #fff;
	}

</style>