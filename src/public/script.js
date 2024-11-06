const urlBtn = document.getElementById("url-submit-btn")
const inputBox = document.getElementById("url-box")
const QRShowBox = document.getElementById("main-c-three")

urlBtn.addEventListener('click', async (res)=>{
    const url = inputBox.value;
    if(url != ''){
        const serverResponse = await fetch('https://generate-qr-code-ef8s.vercel.app/guru/generate/qrobject',{
            method:"POST",
            headers:{
               'Content-Type':'application/json' 
            },
            body:JSON.stringify({
                "url":url
            })
        })
        const QRImg = await serverResponse.json()
        QRShowBox.innerHTML =''
        createUi(QRImg.url)
    }else{
        window.alert('Please enter Something')
    }
})

function createUi(url){
    const divElement = document.createElement('div');
    divElement.setAttribute('id','child-one');
    
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src',url)
    imgElement.setAttribute('alt','qr code')

    divElement.appendChild(imgElement);

    const buttonElement = document.createElement('button');
    const btnTextNode = document.createTextNode('Download');
    buttonElement.appendChild(btnTextNode)
    buttonElement.setAttribute('id','getThisImg');
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('download',"QRCode")
    anchorElement.setAttribute('href',url)
    anchorElement.setAttribute('id','clickOnMe')


    QRShowBox.appendChild(divElement)
    QRShowBox.appendChild(buttonElement)
    QRShowBox.appendChild(anchorElement)

    const downloadBtn = document.getElementById('getThisImg');
    downloadBtn.addEventListener('click',()=>{
        document.getElementById('clickOnMe').click()
    })
}
