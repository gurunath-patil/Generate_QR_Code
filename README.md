# QR Code Generator API

## Overview

A simple QR Code Generator API built with Node.js and EJS, allowing users to generate QR codes and integrate this functionality into their own applications.

## Web Interface

- Visit **https://generate-qr-code-omega.vercel.app/** to generate QR codes interactively.
- Enter your desired text or URL and download your QR code.

## API Documentation

- URL: https://generate-qr-code-omega.vercel.app/guru/generate/qrobject or /imgelement]
- Method: POST

Response: QR code image json object  or  `<img src={url} alt="QR Code">`

## Example Request

1. ````javascript
   fetch(https://generate-qr-code-omega.vercel.app/guru/generate/qrobject,{
   method:"POST",
   body:JSON.Stringify({
   url:[yourText]
   })
   })
   
  - output: {url:'qrCode.png'}
  

2. ````javascript
   fetch(https://generate-qr-code-omega.vercel.app/guru/generate/imgelement,{
   method:"POST",
   body:JSON.Stringify({
   url:[yourText]
   })
   })

  - output: `<img src="qrCode.png" alt="QR Code"/>`

