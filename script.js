const videoElement = document.querySelector(".video");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const container = document.querySelector(".container");

async function selectMediaStream() {
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
      videoElement.requestPictureInPicture();
      console.log("success");
    };
  } catch (err) {
    console.log(err);
  }
}
btn1.addEventListener("click", selectMediaStream);
