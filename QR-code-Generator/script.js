let imgBox= document.querySelector("#imgbox")
let qrImage= document.getElementById("qrimage")
let qrText= document.getElementById("qrtext")

function generateQr(){
    if(qrText.value.length> 0){
        qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        }, 1000)
    }
    
}
