// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyAlI4yJkrJyMs0Vu8a00G21Pzk877nZR6E",
  authDomain: "electrophoria-2020.firebaseapp.com",
  databaseURL: "https://electrophoria-2020.firebaseio.com",
  projectId: "electrophoria-2020",
  storageBucket: "electrophoria-2020.appspot.com",
  messagingSenderId: "590101590642",
  appId: "1:590101590642:web:2d1caaa854652d8eff88eb"


};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      window.location='login.html';
      
    }
  });
  



