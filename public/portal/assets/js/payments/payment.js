firebase.auth().onAuthStateChanged(function(user) {

    if(user)
    {
       console.log("user logged-in");
       




    }
   else{
       console.log("User not logged-in");
   }







});