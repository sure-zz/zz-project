import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
	count: 1,
	windowHeight:0
}
const mutations = {
	add(state,n){
		return state.count+=n;
	},
	reduce(state,n){
		return state.count--;
	},
	getWindowHeight(state){
		state.windowHeight=document.documentElement.clientHeight;
	}
}
export default new Vuex.Store({
	state,
	mutations
})