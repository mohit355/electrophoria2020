firebase.auth().onAuthStateChanged(function(user) {
   if(user)
   {
      var rootRef = firebase.database().ref().child("Users");
      var userid = firebase.auth().currentUser.uid;
      var userref = rootRef.child(userid);
      var childref = userref.child("Year");
      var nameref = userref.child("Full Name");
   
      var welcome_user = document.getElementById("welcome_user");
      nameref.once('value', function(datasnapshot)
         {
   
   
          name.innerText = datasnapshot.val();
          if(datasnapshot.val()==null)
          {
            welcome_user.innerText = "Hello User ,";

          }
          else{
            welcome_user.innerText = "Hello "+ datasnapshot.val()+" ,";
            console.log(datasnapshot.val());
          }
          
   
   
         });
      
      
      childref.on("value", function(snapshot) {
         console.log(snapshot.val());
         
         var req_for_paytoseniors = document.getElementById("req_for_pay");
         var pay_tab =  document.getElementById("pay_info");
         var fresherscorner_tab =  document.getElementById("freshers_corner");
         var keep_updating=  document.getElementById("prof_alert_keepupdating_freshersinfo");
         
         if(snapshot.val()=="Freshers of 2020")
         {
           //Add code for disabling payment for freshers.
           console.log("This student is a fresher.");
           fresherscorner_tab.style.display="block";
           keep_updating.style.display="block";
   
   
         }
         else if(snapshot.val()==null)
         {
            //Add code for disabling payment for freshers.
           console.log("This student is a fresher.");
           fresherscorner_tab.style.display="none";
   
         }
         else
         {
            //Add code for enabling payment for seniors.
            console.log("This student is a senior.");
            req_for_paytoseniors.style.display="block";
            pay_tab.style.display="block";

         }
      }, function (error) {
         console.log("Error: " + error.code);
      });
   
   
   
   }
   else{
      console.log('User not signed in');
   }
   
   
   
   
   
   
   
   
   
   
   });
   
   
   
   