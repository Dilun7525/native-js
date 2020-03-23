const url  = require('url');
const path = require('path');

module.exports = class Route{
	getPath(reqUrl){
		if(!reqUrl){
			return false;
		}else if(this._file !== undefined){
			return this._file;
		}
		
		const partUrl = url.parse(reqUrl);
		let filePath = partUrl.pathname + (partUrl.pathname==='/' ? 'index.html' : '');
		
		switch(path.extname(filePath)){
			case '.html' || '':
				filePath = `./html` + filePath;
				break;
			case '.js':
				filePath = `./dist/js` + filePath;
				break;
			case '.css':
				filePath = `./dist/css` + filePath;
				break;
			case '.jpg' || '.jpeg' || '.gif' || '.svg':
				//filePath = `./${filePath}`;
				break;
			default:
				filePath = false;
				break;
		}
		
		this._file = filePath;
		
		return filePath;
	};
};

