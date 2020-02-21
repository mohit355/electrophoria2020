$("#payment_initiate_btn").click(function(){
  console.log('button clicked');

    var stud_paymode = $("#payment_method").val();
    var stud_payid = $("#input-transactionid").val();

    var rootRef = firebase.database().ref().child("Users");
  var userid = firebase.auth().currentUser.uid;
  var userref = rootRef.child(userid);

  var pay_mode_actual = $("#payment_method_actual").val();

  var payment_initiate_alert = document.getElementById('payment_status_not_updated');
  var payment_not_completedalert = document.getElementById('req_for_pay');
  

  
  if(pay_mode_actual=="online_pay")
  {
  
  if(stud_payid!="" && stud_paymode!="")
  {
    
    
    
    
    var User_paydata = 
    {
    "Payment id":stud_payid,
    "Payment mode":stud_paymode,


    
    
   };


   userref.update(User_paydata,function(error){

    if(error)
        {
            //Error occured in payment details updation.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);

      
        }


        else{
        //Successfully payment details added to database. (Now time to update payment initiation)
        var user_payinitiate={
            "Payment Initiated":'Y',

        };

        userref.update(user_payinitiate,function(error){
            if(error)
        {
            //Error occured in payment details updation.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);

      
        }
        else{
            console.log('Payment initiated in online mode.')
            payment_initiate_alert.style.display="block";
            payment_not_completedalert.style.display="none";

        }
            

        });


        }





   });
  
}


  }
  else if(pay_mode_actual=="cash_pay")
  {
    var User_paydata = 
    {
    "Payment id":'Not Required',
    "Payment mode":'Cash',
    "Payment Initiated":'Y',



    
    
   };

   userref.update(User_paydata,function(error){
       if(error)
       {
            //Error occured in payment details updation.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);

       }
       else{
           //payment inititated in cash mode
           console.log('Payment initiated in cash mode');
           payment_initiate_alert.style.display="block";
            payment_not_completedalert.style.display="none";

       }

   });
  }





});