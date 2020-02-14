firebase.auth().onAuthStateChanged(function(user)
{

  if(user)
  {

    
    var userid = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+ userid).once('value').then(function(snapshot){
     
        var prof_updated_userdashboard = document.getElementById("prof_success_updated");
        var prof_notupdated_userdashboard = document.getElementById("prof_alert_notupdated");
        var prof_info_updated = document.getElementById("prof_info_updated");
        var prof_notupdated_form=document.getElementById("prof_notupdated");
        var prof_notupdatealert2= document.getElementById("prof_notupdatealert2");
         var prof_notupdatealert1= document.getElementById("prof_notupdatealert1");
         var req_for_pay = document.getElementById("req_for_pay");
         var welcome_user = document.getElementById("welcome_user");
         
        
        if(snapshot.val())
       {
         console.log('Profile updated');//Add code here for the people with updated profile.
         
         
         prof_updated_userdashboard.style.display="block";
         prof_notupdated_userdashboard.style.display="none";
         prof_info_updated.style.display="block";
         prof_notupdated_form.style.display="none";
         prof_notupdatealert1.style.display="none";
         prof_notupdatealert2.style.display="none";
         welcome_user.style.display="block";
         

         

         
      
      }
      else
      {
        console.log('Profile not updated');;//Add code here for the people who haven't updated their profile.
        
        prof_notupdated_userdashboard.style.display="block";
        prof_updated_userdashboard.style.display="none";
        
        
        prof_notupdated_form.style.display="block";
        prof_notupdatealert1.style.display="block";
        prof_notupdatealert2.style.display="block";
        req_for_pay.style.display="none";
        welcome_user.style.display="none";
         




      }
      

    });
  }
  else{
  console.log('User not signed in');
  }
    




});
