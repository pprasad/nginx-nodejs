const express=require('express');
const config=require('./config');

const app=express();

const PORT=config.webserver.port;

console.log(config);

app.get('/*',(req,res)=>{
	console.log("Received request");
	res.status(200).end();
});

app.listen(PORT,[()=>{
	console.log(`Started on Port http://localhost:${PORT}`)
}])