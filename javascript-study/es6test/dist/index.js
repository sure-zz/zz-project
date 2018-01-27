'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); //第十八节


var _temp = require('./temp');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log(_temp.name_);
//第一节：var全局声名 let 局部变量声名 const 常量声名
var a = 6;
console.log(a);
window.onload = function () {
	console.log(a);
};
{
	var _a = '技术胖的';
}
console.log(a);

for (var i = 0; i < 10; i++) {
	console.log('循环体中');
}
console.log('循环本外');

//第二节：解构赋值
//一，数组的解构赋值
var a1 = 1,
    b = 2,
    c = 3;

console.log(a1);
console.log(b);
console.log(c);
//陌认值undfined 取陌认值 null的区别 取null
var _ref = [],
    _ref$ = _ref[0],
    foo = _ref$ === undefined ? true : _ref$;

console.log(foo);
//陌认值undfined 取陌认值
var a2 = 'jspang',
    _undefined = undefined,
    b2 = _undefined === undefined ? '技术胖' : _undefined;

console.log(a2 + b2);
//null的区别 取null
var a3 = 'jspang',
    _ref2 = null,
    b3 = _ref2 === undefined ? '技术胖' : _ref2;

console.log(a3 + b3);

//二，对像解构赋值 key健词对象名 要对应上，数据是位置上，
var _foo_$bar = { foo_: 'jspang', bar: "技术胖" },
    foo_ = _foo_$bar.foo_,
    bar = _foo_$bar.bar;

console.log(foo_ + bar);
//先赋值 再解构要用（）括住，不然会报错；
var foo1 = void 0;

//字符串解构 赋值
var _foo = { foo1: 'jspang' };
foo1 = _foo.foo1;

var _jspang = "jspang",
    _jspang2 = _slicedToArray(_jspang, 6),
    a4 = _jspang2[0],
    b4 = _jspang2[1],
    c4 = _jspang2[2],
    d4 = _jspang2[3],
    e4 = _jspang2[4],
    f4 = _jspang2[5];

console.log(a4);
console.log(b4);
console.log(c4);
console.log(d4);
console.log(e4);
console.log(f4);

//第三节：扩展运算符
function jspang() {
	console.log(arguments.length <= 0 ? undefined : arguments[0]);
	console.log(arguments.length <= 1 ? undefined : arguments[1]);
	console.log(arguments.length <= 2 ? undefined : arguments[2]);
	console.log(arguments.length <= 3 ? undefined : arguments[3]);
}
jspang(1, 2, 3);

var arr1 = ['www', 'jspang', 'com'];
// let arr2=arr1;
var arr2 = [].concat(arr1);
console.log(arr2);
arr2.push('shenghongyu');
console.log(arr1);

//和rest运算符 ... 三个点运算符
function jspang2(first) {
	for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		arg[_key - 1] = arguments[_key];
	}

	console.log(arg.length);
	//这种用 for of循环 更有利于内存资源的适放
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var val = _step.value;

			console.log(val);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}
jspang2(0, 1, 2, 3, 4, 5, 6, 7);

//第四节：字符串模板  字符串查找
var jspang1 = "技术胖";
var blog = "大口工若大土日工若日工大口土日 技术胖";
document.write(blog.indexOf(jspang1) > 0);
document.write(blog.includes(jspang1));
//查找开头
document.write(blog.startsWith(jspang1));
//结尾查找
document.write(blog.endsWith(jspang1));
//复制字符串
document.write('jspang|'.repeat(3));

//第五节课 ：数字操作
//二进制声明 binary
var binary = 84;
console.log(binary);
//八进制声明 octal
var octal = 3510;
//判断一个数是不是数字
var anumber = 11 / 4;
console.log(Number.isFinite('jspang'));
//NaN
console.log(Number.isNaN(NaN));
//Number.isInteger
var Inter = 918.9;
console.log(Number.isInteger(Inter));
//取值范围最大安全整数 isSafeInteger判断是否是一个整数
var jspang3 = Math.pow(2, 53) - 1;
console.log(Number.isSafeInteger(jspang3));

//第六节 json 数组格式Array.form,Array.of
var json = {
	'0': 'jspang',
	'1': '技校在',
	length: 2
};
var arr = Array.from(json);
console.log(arr);
//直接转成数组
var arr22 = Array.of(1, 2, 4, 5);
//find() 实例方法 先有arr实例，再调用方法
var arr33 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr33.find(function (value, index, arr) {
	return value > 5;
}));

//第七节 新增数据属性2
//fill 替换
var arr6 = ['jspang', '技术胖', '大胖bb叨扰'];
arr6.fill('web', 1, 3); //从位置1替换到 3,结果是，技术胖，大胖bb叨扰，替换成web
console.log(arr6);
//数据循环 for of
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = arr6.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var val = _step2.value;

		console.log(val);
		// 0,1,2
	}
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = arr6[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var _val = _step3.value;

		console.log(_val);
		// 'jspang','web','web'
	}
} catch (err) {
	_didIteratorError3 = true;
	_iteratorError3 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion3 && _iterator3.return) {
			_iterator3.return();
		}
	} finally {
		if (_didIteratorError3) {
			throw _iteratorError3;
		}
	}
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
	for (var _iterator4 = arr6.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
		var _val2 = _step4.value;

		console.log(_val2);
		// [0, "jspang"]
		// [1, "web"]
		// [2, "web"]
	}
} catch (err) {
	_didIteratorError4 = true;
	_iteratorError4 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion4 && _iterator4.return) {
			_iterator4.return();
		}
	} finally {
		if (_didIteratorError4) {
			throw _iteratorError4;
		}
	}
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
	for (var _iterator5 = arr6.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
		var _step5$value = _slicedToArray(_step5.value, 2),
		    _key2 = _step5$value[0],
		    _val3 = _step5$value[1];

		console.log(_key2, _val3);
		// 0 "jspang"
		// 1 "web"
		// 2 "web"
	}
	//数据循环 entries
} catch (err) {
	_didIteratorError5 = true;
	_iteratorError5 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion5 && _iterator5.return) {
			_iterator5.return();
		}
	} finally {
		if (_didIteratorError5) {
			throw _iteratorError5;
		}
	}
}

var list = arr.entries();
console.log(list.next().value);

//第八节课，剪头涵数
function add(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	if (a == 0) {
		throw new error("a is error");
	}
	return a + b;
}
console.log(add.length);

console.log("********");

var add = function add(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	return a + b;
};
console.log(a + b);

//第九节 涵数和数组补漏
//对象的涵数和解构json
var json11 = {
	a: 'jspang',
	b: "技术腾的"
};
function fun(json11) {
	console.log(a, b);
}
//in的用法 判断对象或数组中，是否存在某个值
var objn = {
	a: 'jspang',
	b: "技术腾的"
};
console.log('c' in objn);

//遍历数组的方法forEach some fifter map
var arrnber = ['jspang', '技术胖', '前端视频'];
//数组转字符串
console.log(arr.toString());

console.log(arr.join('-'));

//第十节：es6中对象 
var name = 'jspang';
var skill = 'web';
var obj = (name, skill);
//key值的构建
var key = 'skill';
var obj22 = _defineProperty({}, key, 'web');
console.log(obj22, 1);

;(function () {
	var obj = { a: 1 };
	var obj1 = { b: 2, a: 2 };
	var obj2 = Object.assign(obj1, obj);
	console.log(obj2);
})();

//第十一节 Symbol 在对象中的作用 数据被保护 for in 不支持媒举
var objsymbol = { name: 'ad', skill: "web" };
var age = Symbol();
objsymbol[age] = 17;
for (var item in objsymbol) {
	console.log(objsymbol[item]);
}
console.log(objsymbol[age]);

//第十二节 set和weakSet数据结构 去重
var setarr = new Set(['jspang', '技术胖']);
console.log(setarr);
//add 追加 重名不管用
setarr.add('kkk');

//第十三节 map 数据结构
var json17 = {
	name: 'jspang',
	skill: 'web'
};
console.log(json17.name);

var map = new Map();
map.set(json17, 'iam');
console.log(map);
map.set('jspang', json17);
console.log(map);
//map 增删查
//取值get
console.log(map.get(json17)); //获取
map.delete(json17); //删除
console.log(map);
console.log(map.size); //个数

console.log(map.has('jspang1')); //查找

//第十四节 用proxy进行预处理
//proxy 代理 es6 增强  对象和涵数（方法）vue 生命周期预处理
var objtt = {
	add: function add(val) {
		return val + 100;
	},
	name: 'i am jspang'
};
console.log(objtt.add(100));
console.log(objtt.name);

var pro = new Proxy({
	add: function add(val) {
		return val + 100;
	},
	name: 'i am jspang'
}, {
	//get set apply
	//得到之前预处理的一些东西
	get: function get(target, key, property) {
		console.log('come in get');
		return target[key];
	},
	set: function set(target, key, value, receiver) {
		console.log('setting ${key}=$(value)');
		return target[key] = value + '111';
	}
});
console.log(pro.name);
pro.name = "技术胖";
console.log(pro.name);

//apply

var target = function target() {
	return 'i anumber jspang';
};
var handler = {
	apply: function apply(target, ctx, args) {
		console.log("do apply");
		return Reflect.apply.apply(Reflect, arguments);
	}
};
var pro11 = new Proxy(target, handler);
console.log(pro11());

//第十七节 class类的使用
//class 的声名，和使用，里面都是方法 涵数  不用加‘,’逗号，这是坑

var coder = function () {
	_createClass(coder, [{
		key: 'name',

		//val类涵数参数
		value: function name(val) {
			console.log(val);
			return val;
		}
	}, {
		key: 'skill',
		value: function skill(val) {
			//可以用this 用来调用 this不是指skill 还是coder
			console.log(this.name('技术腾') + 'skill-' + val);
		}
		//用constructor 来设参数

	}]);

	function coder(a, b) {
		_classCallCheck(this, coder);

		this.a = a;
		this.b = b;
	}

	_createClass(coder, [{
		key: 'add',
		value: function add() {
			return this.a + this.b;
		}
	}]);

	return coder;
}();

var jspang99 = new coder(1, 2);
jspang99.name('jspang1345');
//这样会有错undfind
jspang99.skill('web');

//类的继续

var htmler = function (_coder) {
	_inherits(htmler, _coder);

	function htmler() {
		_classCallCheck(this, htmler);

		return _possibleConstructorReturn(this, (htmler.__proto__ || Object.getPrototypeOf(htmler)).apply(this, arguments));
	}

	return htmler;
}(coder);
//实例化


var pang = new htmler();

//第十六节课 promise es5 回调地诳三步 
;(function () {
	var state = 1;
	//resolve 同意 reject 拒绝
	function step1(resolve, reject) {
		console.log('1.开始-洗菜做铁');
		if (state === 1) {
			resolve('洗菜做饭-完成');
		} else {
			reject('洗菜做饭-未完成');
		}
	}
	function step2(resolve, reject) {
		console.log('2.开始-做下来吃饭');
		if (state === 1) {
			resolve('吃饭-完成');
		} else {
			reject('吃饭-未完成');
		}
	}
	function step3(resolve, reject) {
		console.log('3.收拾-碗');
		if (state === 1) {
			resolve('洗碗-完成');
		} else {
			reject('洗碗-未完成');
		}
	}

	new Promise(step1).then(function (val) {
		console.log(val);
		return new Promise(step2);
	}).then(function (val) {
		console.log(val);
		return new Promise(step3);
	});
})();

//第十八节 es6模块化操作
//export输出。import 引入
