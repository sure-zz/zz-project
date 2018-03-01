<template>
	<div id="apphd" :style="{'height':h+'px'}">		
		<ul class="ulbox">			
			<li v-for="path in array2" id=""><img :src="path" @click="selected(path)"></li>
		</ul>	
		<span class="btnspan" @click="replacefn()">换一批</span>
		<div class="mianbox">
		    <div><img :src="paths"></div>	 
			<input type="radio" name="radio" id="radio"  value="0" runat="server" checked>
		</div>
		<p class="title">选中点击下面按钮立即制作</p>
		<router-link :to="{name:'mbMode',params:{id:useid}}">
			<button class="btnSelect">选中立即制作</button>
		</router-link>
		<p class="footer">2018新年十二星座新年贺卡给你的ta送上祝福吧</p>
	</div>
</template>

<script>
	import { mapState,mapMutations } from 'vuex';
	//import img1 from '../../static/images/t1.jpg';
	//console.log(img1)
	export default {
		data(){
			return {
				msg:1,
				h:0,
				a:0,
				array2:[],
				array:[
				   ['../../static/images/t1.jpg','../../static/images/t2.jpg','../../static/images/t3.jpg','../../static/images/t4.jpg'],

				   ['../../static/images/t5.jpg','../../static/images/t6.jpg','../../static/images/t7.jpg','../../static/images/t8.jpg'],
				    ['../../static/images/t9.jpg','../../static/images/t10.jpg','../../static/images/t11.jpg','../../static/images/t12.jpg']
				],
				paths:'../../static/images/t1.jpg',
				useid:0
			}
		},
		created(){
			this.getWindowHeight()
			this.h = this.$store.state.windowHeight;
			this.array2 = this.array[0];
			//this.paths = this.array2[0];
			
		},
		computed:{

		},
		mounted(){

		},
		methods:{

			...mapMutations(['getWindowHeight']),
			replacefn(){

				var _this=this;
				
				if(_this.a<2){
					_this.a=_this.a+1
					_this.array2 = _this.array[_this.a];


				}else{
					_this.a=0;
					this.array2 = this.array[0];
				}
				
               console.log(_this.a)
			},
			selected(imgurl){
				var _this=this;
				_this.paths=imgurl;
				_this.useid=imgurl.split('/');
				var arrnum=_this.useid.length;	
				_this.useid=_this.useid[arrnum-1].split('.');
				_this.useid=_this.useid[0].replace('t','');
				console.log(_this.useid);

			}
		}
	}
</script>

<style>
	
</style>