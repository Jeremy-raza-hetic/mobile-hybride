document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log('device ready');
};

const openFilePicker = () => {
    alert('open ready');
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

 const photo = document.getElementById('photo');

 photo.addEventListener('click', openFilePicker);
