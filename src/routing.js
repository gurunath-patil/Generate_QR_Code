const express = require('express')
const route = express.Router()
const QR = require("qrcode")


route.post('/qrobject',async (req,res)=>{
    try{
        const {url} = req.body
        const newQR = await QRCodeGenerate(url);
        res.json({"url":newQR});
    }catch(err){
        res.send(err)
    }
})

route.post('/imgelement',async (req,res)=>{
    try{
        const {url} = req.body
        const newQR = await QRCodeGenerate(url);
        res.send(`<img src${newQR} alt="QR Code">`)
    }catch(err){
        res.send(err)
    }
})

async function QRCodeGenerate(URL){
    try{
        const newQRImg = await QR.toDataURL(URL)
        return newQRImg;
    }catch(err){
        console.log(err);
    }
}

module.exports = route