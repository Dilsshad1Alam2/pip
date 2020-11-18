const videoElement = document.querySelector('.video');
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')


btn2.disabled = true;

async function selectMediaStream(){
    try{
        const captureStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = captureStream;
        videoElement.onloadedmetadata = ()=>{
        videoElement.play();
        btn2.disabled = false;

        }
    }catch(err){
        console.log(err)
    }
}

btn1.addEventListener('click',selectMediaStream);

btn2.addEventListener('click',  ()=>{
     videoElement.requestPictureInPicture();
})



