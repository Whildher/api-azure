import express from "express";
var app = express();
app.get('/',(req,res)=>res.json({message: 'Hola mundo'}))
app.listen(process.env.PORT || 80)
