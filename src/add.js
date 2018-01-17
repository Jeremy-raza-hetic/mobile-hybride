(function() {
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    const config = {
      apiKey: "AIzaSyA0nYusQEvt3tygQiWTe6t_lcheuz9MvpA",
      authDomain: "wewalk-23025.firebaseapp.com",
      databaseURL: "https://wewalk-23025.firebaseio.com/",
      storageBucket: "gs://wewalk-23025.appspot.com",
  
    };
    firebase.initializeApp(config);

        const preObject = document.getElementById('object');

        const dbRefObject = firebase.database().ref().child('object');

        dbRefObject.on('value', snap => console.log(snap.val()));

}());