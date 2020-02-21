firebase.auth().onAuthStateChanged(function(user)
{
    if(user)
    {
     //User logged in
     console.log("User logged-in");
     //Checking the user is senior
     var rootRef = firebase.database().ref().child("Users");
      var userid = firebase.auth().currentUser.uid;
      var userref = rootRef.child(userid);
      var yearref = userref.child("Year");
      yearref.once('value', function(datasnapshot)
         {
          console.log(datasnapshot.val());
          
          if(datasnapshot.val()=="Second Year" || datasnapshot.val()=="Third Year" || datasnapshot.val()=="Fourth Year" )
           {
               //User is a senior
               //Checking of payment status

               var payment_status = userref.child("Payment Status");
               var payment_initiation_status = userref.child("Payment Initiated");

               payment_status.once('value', function(datasnapshot)
               {
                 console.log(datasnapshot.val());

                 var success_pay_alert = document.getElementById('prof_success_updated');
                 var payment_success_table =document.getElementById('payment_info_table'); 

                 var payment_incomplete_alert =document.getElementById('req_for_pay'); 
                 var payment_button_go =document.getElementById('payment_button'); 
                 var payment_initiation_status_alert= document.getElementById('payment_status_not_updated'); 
                 
                 
                 
                 payment_initiation_status.once('value',function(datasnapshot_val){

                    if(datasnapshot.val()=="N" && datasnapshot_val.val()=="N")
                 {
                  //Payment need to be done ... payment is incomplete
                  payment_incomplete_alert.style.display="block";
                  payment_button_go.style.display="block";
                  






                 }
                 else if(datasnapshot.val()=="N" && datasnapshot_val.val()=="Y")
                 {
                  
                  payment_incomplete_alert.style.display="none";
                    payment_initiation_status_alert.style.display="block";

                 }
                 
                 
                 
                 
                 else if(datasnapshot.val()=="Y" && datasnapshot_val.val()=="Y")
                 {
                    //Payment reciept to be given ... payment is complete 
                    success_pay_alert.style.display="block";
                    payment_success_table.style.display="block";
                    payment_incomplete_alert.style.display="none";

                 }
                 else
                 {
                     console.log("Error happened");
                     
                     
                 }





                 });

                 





               });

           }
          else
          {
             //User not senior.
             window.location="userdashboard.html";
          }
   
   
         });
      

     
     



    }
    else{
        console.log("User Not logged-in so not eligible for payment");
    }










});