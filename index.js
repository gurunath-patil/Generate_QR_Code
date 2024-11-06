const express = require('express');
const bodyParse = require('body-parser')
const path = require('path')
const app = express()
const route = require('./src/routing')
const port = 8621

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'src/views'))
app.use(express.static(path.join(__dirname,'src/public')))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}));
app.use("/guru/generate",route)


app.get('',(req,res)=>{
    res.render("qrShow")
})


app.listen(port,()=>{
    console.log('server is ready!');
})