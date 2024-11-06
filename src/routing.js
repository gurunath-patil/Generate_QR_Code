const express = require('express')
const route = express.Router()
const QR = require("qrcode")


route.post('/qrobject',async (req,res)=>{
    const {url} = req.body
    const newQR = await QRCodeGenerate(url);
    res.json({"url":newQR});
})

route.post('/imgelement',async (req,res)=>{
    const {url} = req.body
    const newQR = await QRCodeGenerate(url);
    res.send(`<img src${newQR} alt="QR Code">`)
})

async function QRCodeGenerate(URL){
    const newQRImg = await QR.toDataURL(URL)
    return newQRImg;
}

module.exports = route