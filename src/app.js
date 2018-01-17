//
//
//   const txtemail = document.getElementById("email");
//   const txtpassword = document.getElementById("password");
//   const btnlog = document.getElementById('btnlog');
//   const btnsign = document.getElementById('btnsign');
//
//     //Connexion d'un utilisateur
//   btnlog.addEventListener('click', e => {
//
//     const email = txtemail.value;
//     const password = txtpassword.value;
//     const auth = firebase.auth();
//
//     const promise = auth.signInWithEmailAndPassword(email, password);
//     promise.catch(e => console.log(e.message));
//
//
//   })
//
//     //Deconnexion d'un utilisateur
//     btnout.addEventListener('click', e => {
//
//       const auth = firebase.auth()
//
//       auth.signOut().then(function() {
//         console.log('sign out')
//       }).catch(function(error) {
//         console.log('error')
//       })
//
//
//     })
//
//     //Inscription d'un utilisateur
//   btnsign.addEventListener('click', e => {
//
//     const email = txtemail.value;
//     const password = txtpassword.value;
//     const auth = firebase.auth();
//
//     const promise = auth.createUserWithEmailAndPassword(email, password);
//     promise.catch(e => console.log(e.message));
//   })
//   //Add a User
//   firebase.auth().onAuthStateChanged(firebaseUser => {
//       if(firebaseUser) {
//           console.log(firebaseUser);
//       } else {
//           console.log('not logged id');
//
//       }
//   })
//  authentification
//   //Current Users
//
//
// // =======
//   var user = firebase.auth().currentUser;
//  master
//
//   if (user != null) {
//     console.log('sign in')
//   } else {
//     console.log('Not sign in')
//   }
