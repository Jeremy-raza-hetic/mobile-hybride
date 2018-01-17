let db = firebase.database();
let places = firebase.database.ref().child('places');
let user = firebase.auth().currentUser;

console.log('bite');
console.log(places);

places.on('child__added', snapshot => console.log(snapshot.val()));

// Add new pin
let id = firebase.database().ref().child('places').push().key;
let addNewPin = description => {
    if (user) {
        let obj = {
            pictures: [],
            description: description
        }
    } else {
        console.log('Not authentified');
    }

    let updates = {};
    updates['/places/' + id] = obj;

    firebase.database().ref().update(updates);
};

let updatePin = picturesUrl => {
    let pinID = '';
    if (user) {
        let obj = {
            _id: pinId,
            pictures: picturesUrl
        }
    } else {
        console.log('Not authentified');
    }
    let updates = {};
    updates['/places/' + _id] = obj;

    return firebase.database().ref().update(updates);
}
