<template>
	<div class="app">
		{{msg}}{{count}}
		<p>
			<button @click="$store.commit('add')">+</button>
			<button @click="$store.commit('reduce')">-</button>
		</p>
	</div>

</template>

<script type="text/javascript">
	import { mapState } from 'Vuex';
	export default{
		data:function(){
			return {
			   msg:'hello from component a!'
			}
		},
		methods: {
		},
		// computed:mapState({
		// 	count: state => state.count
		// }),
		computed:mapState(['count']),
		// computed:{
			// count(){
			// 	return this.$store.state.count
			// }
		// },
		created(){
			console.log(this.msgfromfath)
		}
	}

</script>

<style type="text/css">
	h1{
		color: #43b983;
	}
	.classred{color:red;}
</style>