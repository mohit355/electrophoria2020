firebase.auth().onAuthStateChanged(function(user)
{

  if(user)
  {

    
    var userid = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+ userid).once('value').then(function(snapshot){
     
        var prof_updated_userdashboard = document.getElementById("prof_success_updated");
        var prof_notupdated_userdashboard = document.getElementById("prof_alert_notupdated");
        var p_alert = document.getElementById("userdashboard_p_alert");
        var button_update=document.getElementById("button_update");
        var welcome_user = document.getElementById("welcome_user");
        var req_for_pay = document.getElementById("req_for_pay");
        
        if(snapshot.val())
       {
         console.log('Profile updated');//Add code here for the people with updated profile.
         
         
         prof_updated_userdashboard.style.display="block";
         prof_notupdated_userdashboard.style.display="none";
         p_alert.style.display="none";
         button_update.style.display="none";
         
         welcome_user.style.display="block";
         
         

         
      
      }
      else
      {
        console.log('Profile not updated');;//Add code here for the people who haven't updated their profile.
        
        prof_notupdated_userdashboard.style.display="block";
        prof_updated_userdashboard.style.display="none";
        p_alert.style.display="block";
        button_update.style.display="block";
      
        req_for_pay.style.display="none";




      }
      

    });
  }
  else{
  console.log('User not signed in');
  }
    




});
