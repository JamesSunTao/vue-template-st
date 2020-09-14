const glob = require('glob');
const path = require('path');
// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
const PAGE_PATH = path.resolve(__dirname, '../utils');
/**
 * 多入口配置
 */
exports.entries = function() {
	var entryFiles = glob.sync(PAGE_PATH + '/*/index.js');
	var map = {};
	entryFiles.forEach((filePath) => {
    let patharr = filePath.split('/');
		var filename = patharr[patharr.length-2]
    map[filename] = filePath;
    console.log('map[filename]:',filename,map[filename]);
  })
  
	return map;
}