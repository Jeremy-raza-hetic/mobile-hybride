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
    watchID();
};

const onError = error => {
    console.log(error);
};

export const watchingSuccess = position => {
    return userPos = [position.coords.longitude, position.coords.latitude];
};

const watchingError = err => {
    console.log(err)
};

export const watchID = () => {
    navigator.geolocation.watchPosition(watchingSuccess, watchingError, { timeout: 3000 });
};

/*const btn = document.getElementById('btn');

btn.addEventListener('click', getPosition);*/






