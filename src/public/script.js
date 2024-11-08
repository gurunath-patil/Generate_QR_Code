const urlBtn = document.getElementById('url-submit-btn')
const inputBox = document.getElementById('url-box')
const QRShowBox = document.getElementById('main-c-three')
const apiBtn = document.getElementById('api-description')

urlBtn.addEventListener('click', async (res) => {
	const url = inputBox.value
	if (url != '') {
		const serverResponse = await fetch('http://localhost:8621/guru/generate/qrobject', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				url: url,
			}),
		})
		const QRImg = await serverResponse.json()
		QRShowBox.innerHTML = ''
		createUi(QRImg.url)
	} else {
		window.alert('Please enter Something')
	}
})

// QR code display ui after click on create btn
function createUi(url) {
	const divElement = document.createElement('div')
	divElement.setAttribute('id', 'child-one')

	const imgElement = document.createElement('img')
	imgElement.setAttribute('src', url)
	imgElement.setAttribute('alt', 'qr code')

	divElement.appendChild(imgElement)

	const buttonElement = document.createElement('button')
	const btnTextNode = document.createTextNode('Download')
	buttonElement.appendChild(btnTextNode)
	buttonElement.setAttribute('id', 'getThisImg')
	const anchorElement = document.createElement('a')
	anchorElement.setAttribute('download', 'QRCode')
	anchorElement.setAttribute('href', url)
	anchorElement.setAttribute('id', 'clickOnMe')

	QRShowBox.appendChild(divElement)
	QRShowBox.appendChild(buttonElement)
	QRShowBox.appendChild(anchorElement)

	const downloadBtn = document.getElementById('getThisImg')
	downloadBtn.addEventListener('click', () => {
		document.getElementById('clickOnMe').click()
	})
}

// api description ui

const flag = false;
apiBtn.addEventListener('click', (res) => {
    const divElement = document.getElementById('api-div-box')
    if(divElement.style.display == 'block'){
        divElement.style.display = 'none'
    }else{
        divElement.style.display = 'block'
    }
	
})

window.addEventListener('load',()=>{insertAPIUi()})

function insertAPIUi(){
    const listData = [
		'request on : https://localhost:8621/gurunath/generate/[qrobject Or imgelement]',
		'/qrobject : to get json object ',
		'/imgelement: to get <img src=[url] alt=”qr code”>',
	]
	const divBox = document.createElement('div')
	const childDivOne = document.createElement('div')
	const childDivTwo = document.createElement('div')
    divBox.setAttribute('id',"api-div-box");

	const spanElement = document.createElement('span')
	const text = document.createTextNode('Build an QR Code Generator Using this free Open Source API')
	spanElement.appendChild(text)

	const listElement = document.createElement('ul')

	for (let item of listData) {
		const liElement = document.createElement('li')
		const liText = document.createTextNode(item)
		liElement.appendChild(liText)
		listElement.appendChild(liElement)
	}

    childDivOne.appendChild(spanElement);
    childDivTwo.appendChild(listElement);
    divBox.appendChild(childDivOne)
    divBox.appendChild(childDivTwo)
    document.body.appendChild(divBox)
}