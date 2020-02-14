firebase.auth().onAuthStateChanged(function(user)
{

  if(user)
  {

    
    var userid = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+ userid).once('value').then(function(snapshot){
     
      var prof_updated_userprofile = document.getElementById("prof_success_updated");
      var prof_updated = document.getElementById("prof_notupdated");
      var prof_updated_alerts1 = document.getElementById("prof_notupdatealert1");
      var prof_updated_alerts2 = document.getElementById("prof_notupdatealert2");
      if(snapshot.val())
      {
         console.log('Profile updated');//Add code here for the people with updated profile.
         
         prof_updated.style.display="none";
         prof_updated_alerts1.style.display="none";
         prof_updated_alerts2.style.display="none";
         prof_updated_userprofile.style.display="block";
         

      
      }
      else
      {
        console.log('Profile not updated');;//Add code here for the people who haven't updated their profile.
        prof_updated_userprofile.style.display="none";


      }
      

    });
  }
  else{
  console.log('User not signed in');
  }
    




});




