document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}

export const getCurrentPosition = (position) => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
};


export const onSuccess = (position) => {
   return pos = [position.coords.longitude, position.coords.latitude];
};

const onError = (error) => {
    console.log(error);
};

export const watchPos = () => {
    navigator.geolocation.watchPosition(succeed, erratum, { timeout: 2000 });
};

export const succeed = (position) => {
    return currentPos = [position.coords.longitude, position.coords.latitude];
};

export const erratum = (error) => {
    console.log(error)
};





