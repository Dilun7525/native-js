'use strict';

// Constants
const PORT = 3000;
const HOST = 'nodejs';
const pid  = process.pid;
const http = require('http');
const router = require('./route');
const fs   = require('fs');

http.createServer(function(req, res){
	const clRouter = new router();
	
	const filePath = clRouter.getPath(req.url);
	let fileContent = false;
	
	if(!!filePath){
		try{
			fileContent = fs.readFileSync(filePath, "utf8");
			
			// Отдача ответа.
			res.writeHead(200);
			res.write(fileContent);
			res.end();
			
		}catch{
			fileContent = false;
		}
	}
	
	if(!fileContent){
		res.writeHead(404);
		res.write('Error: File Not Found!');
		res.end();
	}
	
}).listen(PORT, (err) => {
	if(err){
		console.log(`Something went wrong`, err);
	}else{
		console.log(`Server stared. PID: ${pid}, Host: ${HOST}; Port: ${PORT}`);
	}

});