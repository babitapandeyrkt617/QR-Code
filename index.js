const qrCode = new QRCodeStyling({
    width :300,
    height:300,
    dotsOptions:{
        color:"#000",
        type:'rounded'
    },
    backgroundOptions:{
        color: ' #fff'
    }
})

document.getElementById('generate-btn').addEventListener('click',()=>{
    const qrText = document.getElementById('qr-text').value
    const color= document.getElementById('color').value
    const bgColor= document.getElementById('bg-color').value
    const logoUpload = document.getElementById('logo-upload').files[0]


    qrCode.update({
        data:qrText,
        dotsOptions:{
            color:color
        },
        backgroundOptions:{
            color:bgColor
        },
        imageOptions:{
            crossOrigin:'anonymous',
            margin:10
        }
    })


    if(logoUpload){
        const reader = new FileReader();
        reader.onload= function(event){
            qrCode.update({
                image: event.target.result
            });

        };
        reader.readAsDataURL(logoUpload)
    }else{
        qrCode.update({
            image:''
        })
    }
qrCode.append(document.getElementById('qr-code'))
document.getElementById('download-btn').style.display='block';
})
document.getElementById('download-btn').addEventListener('click',()=>{
    qrCode.download({name:'qr-code', extensions: 'png'})
})
