const videoElement = document.querySelector(".video");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const container = document.querySelector(".container");



async function selectMediaStream() {
  try {
    btn2.disabled = false;
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = setTimeout(() => {
      videoElement.play();
    },2000);
  } catch (err) {
    console.log(err);
  }
}

function reqpic(){
  videoElement.requestPictureInPicture();
}

btn1.addEventListener("click", selectMediaStream);
btn2.addEventListener("click",reqpic)


