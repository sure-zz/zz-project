import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
	count: 1
};
const mutations = {
	add(state,seetp){
		state.count+=seetp;
	},
	reduce(state,seetp){
		state.count-=seetp;
	}
};
const getters = {
	count(state){
		return state.count += 100;
	}
};
export default new Vuex.Store({
	state,
	mutations,
	getters
});
