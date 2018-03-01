<template>
	<div class="bogmox">
		 <div class="bgn">
		 	 <p class="title">2018年<b>什么星座</b>会与你发生爱情故事</p>
		 	 <span class="contenbox">
		 	 	<img :src="msg">
		 	 	
		 	 </span>
		 	 <div class="footer">
		 	 	<img :src="footer">
		 	 	 <router-link :to="{name:'rack'}">
					  <span class="nametitle">测一测 查看结果</span>
				</router-link>
		 	 </div>
		 </div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				msg:'',
				footer:'../../static/imgrack/logo.png'
			}
		},
		created(){
			this.rorack();
		},
		methods:{
			rorack(){
				var _this=this;
				var arr=['../../static/imgrack/1-1.png','../../static/imgrack/1-2.png','../../static/imgrack/1-3.png','../../static/imgrack/1-4.png','../../static/imgrack/1-5.png','../../static/imgrack/1-6.png','../../static/imgrack/1-7.png','../../static/imgrack/1-8.png','../../static/imgrack/1-9.png','../../static/imgrack/1-10.png','../../static/imgrack/1-11.png','../../static/imgrack/1-12.png'];
				var i=0;
				setInterval(function(){
					_this.msg=arr[i];
					i+=1;
					if(i>=arr.length){
						i=0;
					}

				},100)

				

			}
		}
	}
</script>
<style>
	.bogmox{
		width:90%;
		margin:auto;
		height:auto;
		/*position: absolute;*/
		/*top:0rem;
		left:0rem;
		right:0rem;
		bottom:0rem;*/
		border-radius: 0.5rem;
		border:2px solid #000;
		padding:0.2rem;
		
	}
	.bgn{
		width:100%;
		margin:auto;
		border-radius: 0.5rem;
		border:1px solid #000;
		/*border:1px solid #000;
		left:0.1rem;
		top:0.1rem;
		right:0.1rem;
		bottom:0.1rem;*/
	}
	.title{
		width:100%;
		border-bottom: 2px solid #000;
		font-size: 0.4rem;
		text-align: center;
		padding:0.6rem 0rem;
	}
	.contenbox{
		display: block;
		width:100%;
		height:7rem;
		border-bottom: 2px solid #000;
		background: #fff;
		text-align: center;
		text-align: center;
	}
	.contenbox img{
		width:90%;
	}
	.footer{
		padding:0.25rem 0rem;
	}
	.footer img{
		width:100%;
	}
	.nametitle{
		display: block;
		text-align: center;

		font-size: 0.35rem;
		height:0.5rem;
		line-height: 0.5rem;
	}
</style>