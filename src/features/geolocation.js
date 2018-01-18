document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}

export const getPosition = () => {
    alert('getting pos');
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout:1000});
};

export const onSuccess = (position) => {
    return userPos = [position.coords.longitude, position.coords.latitude];
};

function onError(error) {
    console.log(error);
};

/*const btn = document.getElementById('btn');

btn.addEventListener('click', getPosition);*/






