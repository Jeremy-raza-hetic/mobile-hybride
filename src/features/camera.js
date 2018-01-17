document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log('device ready');
    alert('hello world');
};

const openFilePicker = () => {
    const options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    };
    navigator.camera.getPicture(function cameraSuccess() {
        console.log('aaa');
    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");
    }, options);
 };

const cameraSuccess = () => {
    console.log('aaaaa');
};

const cameraError = () => {
    console.log('bbb');
};

 /*const btn = document.getElementById('btn');

 btn.addEventListener('click', openFilePicker);
*/