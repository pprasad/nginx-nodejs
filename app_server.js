const express=require('express');

const app=express();

const port=8081

app.get('/info',(req,res)=>{
   res.send("Hello this is application server");
   //res.sendStatus(400);
})

app.listen(port,()=>{
  console.log(`App server started on http://localhost:${port}`);
})