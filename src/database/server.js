const db = firebase.database();
const store = firebase.storage();
const storeRef = firebase.storage().ref();
const places = firebase.database().ref('places');
const user = true;

export const getValue = places.on("value", snapshot => {},
    error => {
        console.log("Error: " + error.code);
});

export const addValue = places.on('child_added', data => {
    const newPin = data.val();
    return newPin;
});

export const updateValue = places.on('child_changed', data => {
    const updatedPin = data.val();
    return updatedPin;
});

// Add new pin
export const addNewPin = (description, localisation, pictureEncoded, name) => {
    if (user) {
        storeRef.putString(pictureEncoded, 'base64url')
            .then((snapshot) => {
                const imgURL = snapshot.downloadURL;
        });
        const newPlacesRef = places.push();
        const newPlaceId = firebase.database().ref().child('places').push().key;
        newPlacesRef.set({
            _id: newPlaceId,
            description,
            localisation,
            picturesUrl: imgURL,
            name
        });
    } else {
        console.log('Not authentified');
    }
};










