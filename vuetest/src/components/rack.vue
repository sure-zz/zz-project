<template>
	<div class="contenImg">
		<img :src="imgurl">
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				imgurl:''
			}
		},
		created(){
			this.rack();
		},
		methods:{
			rack(){
				var _this=this;
				var arr=['../../static/imgrack/2-1.png','../../static/imgrack/2-2.png','../../static/imgrack/2-3.png','../../static/imgrack/2-4.png','../../static/imgrack/2-5.png','../../static/imgrack/2-6.png','../../static/imgrack/2-7.png','../../static/imgrack/2-8.png','../../static/imgrack/2-9.png','../../static/imgrack/2-10.png','../../static/imgrack/2-11.png','../../static/imgrack/2-12.png'];
				var index = Math.floor((Math.random()*arr.length)); 
				_this.imgurl=arr[index];

			}
		}
	}

</script>

<style>
	.contenImg{
		position: absolute;
		top:0rem;
		left:0rem;
		bottom:0rem;
		right:0rem;
		width:100%;
		height:100%;
		text-align: center;
	}
	.contenImg img{
		width:95%;
		margin:auto;
		text-align: center;
	}
</style>