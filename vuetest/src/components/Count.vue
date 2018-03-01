<template>
	<div>
		<h2>{{msg}}</h2></hr>
		<h3>{{$store.state.count}}-{{count}}</h3>
		<p>
			<button @click="$store.commit('add',10)">+</button>
			<button @click="reduce">-</button>
		</p>
	</div>
</template>
<script type="text/javascript">
	import store from '@/vuex/store';
	//引用状态
	import { mapState,mapMutations } from 'vuex';

	export default {
		data(){
			return {
				msg:'hello world'
			}	
		},
		//ex5的写法 一
		// computed:{
		// 	count:function(state){
		// 		return state.count
		// 	}
		// },
		//es6的方法 二
		// computed:mapState({
		// 	count:state=>state.count
		// }),
		//数组的方法 三
		computed:mapState(['count']),
		methods:mapMutations(['add','reduce']),
		store
	}
</script>