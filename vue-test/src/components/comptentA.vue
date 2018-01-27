<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<span>{{msgfromfath}}</span>
		<button v-on:click='onClickMe'>Click!</button>
		<button @click="chilCall()">子传父</button>
		<select>
			<option v-for="item in list">{{item.message}}</option>
		</select>
		<div v-bind:class="{classred:isOk}">我爱你 刘婷</div>
		<input type="checkbox" name="colorChange" id="colorChange" v-model="isOk">
		<label for="colorChange">改变颜色</label>
	</div>

</template>

<script type="text/javascript">
	export default{
		data:function(){
			return {
			   msg:'hello from component a!',
			   isOk: true
			}
		},
		props:['msgfromfath','list'],
		methods: {
			onClickMe:function(){
				console.log(this.msgfromfath)
			},
			chilCall:function(pars){
				this.$emit('newNodeEvent','我是子元素传过来的 wowowo')
			}
		},
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