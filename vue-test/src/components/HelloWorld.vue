<template>
  <div class="hello">
      <input type="text" name="lt" id="a" v-on:input="change($event.target.value,$event)">
      {{name}}
      {{$store.state.count}}
      {{count}}
      <comptent-a msgfromfath="you die" :list="arry" @newNodeEvent="parentLisen"></comptent-a>

      <group>
        <datetime-range :title="title" start-date="2017-01-01" end-date="2017-02-02"  v-model="value" @on-change="onChange"></datetime-range>

      </group>

      <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>

      <group>
           <x-switch @on-change="xswitchCallback" :title="title" :value-map="['0', '1']" v-model="stringValue"></x-switch>
            
      </group> 

       <loading :show="show1" :text="text1"></loading> 
       <span v-if="ifelse">v-if:为真显示</span>
       <span v-else="ifelse">v-else:为假值行</span>
       <div>
         <ul>
            <li v-for="itemlist in sortItems">{{itemlist}}</li>
         </ul>
         <hr>
         <ul>
          <li v-for="(student,index) in students">
            {{index+1}}:{{student.name}}-{{student.age}}
         </li>
       </ul>
       </div>
       <hr>
       <div>v-modle 数据源绑定时实例</div><br>
       <p>原始文件信息：{{msg}}</p>
       <h3>文本框</h3>
       <p>v-model:<input type="text" v-model="msg"></p>
       <p>v-model.lazy<input type="text" v-model.lazy="msg"></p>
       <p>v-model.number<input type="text" v-model.number="msg"></p>
       <p>v-model.trim<input type="text" v-model.trim="msg"></p>
       <hr>
       <h3>文本域</h3>
       <textarea cols="30" rows="10" v-model="msg">{{msg}}</textarea>
       <h3>多选框复选一个</h3>
       <input type="checkbox" id="istrue" v-model="istrue">
       <label for="istrue">{{istrue}}</label>

       <h3>{{web_names}}</h3>
       <input type="checkbox" id="jspang" value="jspang" v-model="web_names">
       <label for="web_names">{{istrue}}</label>

       <input type="checkbox" id="panda"  value="panda" v-model="web_names">
       <label for="web_names">{{istrue}}</label>

       <input type="checkbox" id="panpan" value="panpan" v-model="web_names">
       <label for="web_names">{{istrue}}</label>

       <hr>
       <h3>单选框</h3>
       <p>
         <input type="radio" id="one" v-model="sex" value="男">
         <label for="one">男</label>

         <input type="radio" id="two" v-model="sex" value="女">
         <label for="two">女</label>
         <p>你选择的性别是：{{sex}}</p>
       </p>  
      <hr>
      <h3>v-on 指令</h3>
      <div>
         <span>本场比赛得分：{{fenshu}}</span>
         <p>
           <button v-on:click="jiafen">加分</button>
           <button @click="jianfen">减分</button>
         </p>
      </div>
  </div>
</template>

<script>
import comptentA from './comptentA.vue'
import { mapState } from 'vuex'
import { Group, DatetimeRange, Swiper ,XSwitch ,Loading} from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg'
}]
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: "唐兴平",
      arry:[
         {message:'aaa'},
         {message:'bbb'} 
      ],

      value: ['2017-01-15', '03', '05'],
      title: "默认值",
      demo01_list:baseList,
      demo01_index: 1,
      stringValue:0,
      show1: false,
      text1: 'Processing',
      ifelse:false,
      items:[12,3432,262,9],
      students:[
            {name:'jspang',age:23},
            {name:'panda',age:28},
            {name:'adff',age:23},
            {name:'pp',age:13}
      ],
      istrue:true,
      web_names:[],
      sex:'男',
      fenshu:0
    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    },
    sortItems:function(){
      return this.items.sort();
    }

  },
  components:{ 
    comptentA,
    Group,
    DatetimeRange,
    Swiper,
    XSwitch,
    Loading 
  },
  //方法
  methods:{
    jiafen:function(){
      this.fenshu++;
    },
    jianfen:function(){
      this.fenshu--;
    },
    change(value, target){
      var _this = this;
      _this.name=value;
      target.value = value
      
    },
    onChange (val) {
      console.log('change', val)
    },
    parentLisen(evtValue) {    
        //evtValue 是子组件传过来的值
        alert(evtValue)
    },
    demo01_onIndexChange(item){
      console.log(item)
    },
    xswitchCallback(status){
      var _this = this
      if (status == 1) {
        _this.show1 = true
        setTimeout(() => {_this.show1 = false;_this.stringValue = 0}, 2000)
      }
    },
    sornumber(a,b){
      return a-b;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
