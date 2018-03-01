const path=require('path');
module.exports={
	entry:{
		entry:'./src/entry.js'
	},
	output:{
		path:path.resolve(_dirname,'dist'),
		filename:'bundle.js'
	},
	module:{},
	plugins:[],
	devServer:{}
}