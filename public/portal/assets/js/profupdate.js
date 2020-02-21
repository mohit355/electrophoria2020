$("#btn-update").click(function(){

  var stud_year = $("#stud_year").val();
  var stu_email = $("#input-email").val();
  var user_email=firebase.auth().currentUser.email;
  var stu_phno = $("#input-phno").val(); 
  var stu_juroll = $("#input-juroll").val();
  var stu_fullname = $("#input-fname").val();
  var stu_gender = $("#input-gender").val();
  var stu_food = $("#input-food").val();
  var stu_tees = $("#input-tshirt").val(); 

  var rootRef = firebase.database().ref().child("Users");
  var userid = firebase.auth().currentUser.uid;
  var userref = rootRef.child(userid);
  
  

  if(stud_year!="" && stu_email!="" && stu_phno!=""&& stu_juroll!="" && stu_fullname!="" && stu_gender!="" && stu_food!="" && stu_tees!="" )
  {
      var Userdata = 
  {
  "Email id":user_email,
  "Ph no":stu_phno,
  "Roll No":stu_juroll,
  "Full Name":stu_fullname,
  "Gender": stu_gender,
  "Food Choice":stu_food,
  "Year": stud_year,
  "Tees":stu_tees,

  
 };
   

   userref.update(Userdata,function(error){
        
    var prof_updated_userprofile = document.getElementById("prof_success_updated");
    var prof_updated = document.getElementById("prof_notupdated");
    var prof_updated_alerts1 = document.getElementById("prof_notupdatealert1");
    var prof_updated_alerts2 = document.getElementById("prof_notupdatealert2");
    if(error)
        {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);

      
        }
       else{

        console.log('Profile updated successfully');
        var userid = firebase.auth().currentUser.uid;
  firebase.database().ref('Users/'+ userid).once('value').then(function(snapshot){
   
    
    if(snapshot.val())
    {
       console.log('Profile updated');//Add code here for the people with updated profile.
       
       prof_updated.style.display="none";
       prof_updated_alerts1.style.display="none";
       prof_updated_alerts2.style.display="none";
       prof_updated_userprofile.style.display="block";

       //Code for set payment status to N for the seniors.

       var year_of_stud = userref.child("Year");
       year_of_stud.once('value', function(datasnapshot)
         {
   
   
         
          if(datasnapshot.val()=="Second Year" || datasnapshot.val()=="Third Year" || datasnapshot.val()=="Fourth Year")
          {
            //Set payment status to N.
            
            var User_pay_status = 
                     {
                        "Payment Status":'N',
                        "Payment Initiated":'N',
                     };
             
             userref.update(User_pay_status,function(error){

              if(error)
              {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
      
            
              }
             else{

              console.log('Payment not done for this senior.')
             }





             });

       

          
          
          
          
          
          
          }
          else{
            console.log(datasnapshot.val());
            console.log('Payment not required');
          }
          
   
   
         });
      

       

    
    }
    else
    {
      console.log('Profile not updated');;//Add code here for the people who haven't updated their profile.
      prof_updated_userprofile.style.display="none";


    }
    

  });



        
        }
      


   });





  }

  var yearerr = document.getElementById("valid_yearalert");
  var emailerr = document.getElementById("valid_emailalert");
  var phnoerr = document.getElementById("valid_phnoalert");
  var rollnoerr = document.getElementById("valid_rollnoalert");
  var fullnameerr = document.getElementById("valid_fullnamealert");
  var gendererr = document.getElementById("valid_genderalert");
  var fooderr = document.getElementById("valid_foodalert");
  var teeserr = document.getElementById("valid_teesalert");



if(stud_year=="")
{
yearerr.style.display= "block";
emailerr.style.display= "none";
phnoerr.style.display= "none";
rollnoerr.style.display= "none";
fullnameerr.style.display= "none";
gendererr.style.display= "none";
fooderr.style.display= "none";
teeserr.style.display="none";

}
else if(stu_email=="")
{
emailerr.style.display= "block";
yearerr.style.display= "none";
phnoerr.style.display= "none";
rollnoerr.style.display= "none";
fullnameerr.style.display= "none";
gendererr.style.display= "none";
fooderr.style.display= "none";
teeserr.style.display="none";
}
else if(stu_phno=="")
{
phnoerr.style.display= "block";
emailerr.style.display= "none";
yearerr.style.display= "none";
rollnoerr.style.display= "none";
fullnameerr.style.display= "none";
gendererr.style.display= "none";
fooderr.style.display= "none";
teeserr.style.display="none";
}
else if(stu_juroll=="")
{
rollnoerr.style.display= "block";
emailerr.style.display= "none";
yearerr.style.display= "none";
phnoerr.style.display= "none";
fullnameerr.style.display= "none";
gendererr.style.display= "none";
fooderr.style.display= "none";
teeserr.style.display="none";
}
else if(stu_fullname=="")
{
fullnameerr.style.display= "block";
emailerr.style.display= "none";
yearerr.style.display= "none";
phnoerr.style.display= "none";
rollnoerr.style.display= "none";
gendererr.style.display= "none";
fooderr.style.display= "none";
teeserr.style.display="none";
}
else if(stu_gender=="")
{
gendererr.style.display= "block";
emailerr.style.display= "none";
yearerr.style.display= "none";
phnoerr.style.display= "none";
rollnoerr.style.display= "none";
fullnameerr.style.display= "none";
fooderr.style.display= "none";
teeserr.style.display="none";
}
else if(stu_food=="")
{
fooderr.style.display= "block";
emailerr.style.display= "none";
yearerr.style.display= "none";
phnoerr.style.display= "none";
rollnoerr.style.display= "none";
fullnameerr.style.display= "none";
gendererr.style.display= "none";
teeserr.style.display="none";
}
else if(stu_tees=="")
{
teeserr.style.display="block";
fooderr.style.display= "none";
emailerr.style.display= "none";
yearerr.style.display= "none";
phnoerr.style.display= "none";
rollnoerr.style.display= "none";
fullnameerr.style.display= "none";
gendererr.style.display= "none";
}








});







