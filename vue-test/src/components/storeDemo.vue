<template>
	<div class="app">
		{{msg}}{{count}}
		<p>
			<!-- <button @click="$store.commit('add',0.5)">+</button>
			<button @click="$store.commit('reduce',0.5)">-</button> -->
			<!-- <button @click="add">+add</button> -->
			<button @click="$store.commit('add',0.5)">+addgetters</button>
			<button @click="reduce">-reduce</button>
		</p>
	</div>

</template>

<script type="text/javascript">
	import { mapState,mapMutations,mapGetters } from 'Vuex';
	export default{
		data:function(){
			return {
			   msg:'hello from component a!'
			}
		},
		methods: {
			// ...mapMutations(['add','reduce']),
			// add(){
			// 	return this.$store.commit('add', 0.5)
			// },
			reduce(){
				return this.$store.commit('reduce', 0.5);
			}
		},
		// computed:mapState({
		// 	count: state => state.count
		// }),
		computed:{
			...mapState(['count']),
			...mapGetters(['count'])
			// count(){
			// 	return this.$store.getters.count
			// }
		},
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