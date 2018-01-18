
  const txtemail = document.getElementById("email");
  const txtpassword = document.getElementById("password");
  const btnlog = document.getElementById('btnlog');
  const btnsign = document.getElementById('btnsign');
  const body = document.querySelector('body');


   const active = (user) => {
    if (user != null) {
      body.classList.add('logged')
    }
  }

   const unActive = (user) => {
    if (user != null) {
      body.classList.remove('logged')
    }
   }
    //Add a User
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
          console.log(firebaseUser);
          active(firebaseUser)
      } else {
          console.log('not logged id');
      }
  })
    //Current Users

    const user = firebase.auth().currentUser; 
    if (user != null) {
      console.log('sign in');
    } else {
      console.log('Not sign in')
    }

    //Connexion d'un utilisateur 
  btnlog.addEventListener('click', e => {

    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth()
    const user = firebase.auth().currentUser; 
    auth.signInWithEmailAndPassword(email, password) 
    .then( active(user) ) 
    .catch(e => console.log(e.message));
    

    active(user)

  })

    //Deconnexion d'un utilisateur
    btnout.addEventListener('click', e => {

      const auth = firebase.auth()

      auth.signOut().then(function() {
        console.log('sign out')
        body.classList.remove('logged')
      }).catch(function(error) {
        console.log('error')
      })
      

    })

    //Inscription d'un utilisateur
  btnsign.addEventListener('click', e => {

    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth();
    const user = firebase.auth().currentUser; 


    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

  });