$("#btn-submit").click(function(){

    
    
    var stu_wpno = $("#input-wpno").val();
    var stu_juroll = $("#input-juroll").val();
    var stu_fullname = $("#input-fname").val();
    var stu_question_1 = $("#question_1").val();
    var stu_question_2 = $("#question_2").val();
    var stu_question_3 = $("#question_3").val();
    var stu_question_4 = $("#question_4").val();
    var stu_question_5 = $("#question_5").val(); //If more question is there add here
    
    
  
    var rootRef = firebase.database().ref().child("Answers_from_freshers");
    var userid = firebase.auth().currentUser.uid;
    var userref = rootRef.child(userid);
    
    var rootRef_wpno = firebase.database().ref().child("Users");
    var userref_wpno = rootRef_wpno.child(userid);
    
    
  
    if(stu_wpno!="" && stu_juroll!="" && stu_fullname!=""&& stu_juroll!="")
    {
        var Userdata_answers = 
    {
    
    "Roll No":stu_juroll,
    "Full Name":stu_fullname,
    "Question1": stu_question_1,
    "Question2": stu_question_2,
    "Question3": stu_question_3,
    "Question4": stu_question_4,
    "Question5": stu_question_5, //if more question is there add here.
    
  
    
   };
     
  
     userref.update(Userdata_answers,function(error){
          
      
      if(error)
          {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
  
        
          }
         else{
  
          console.log('Profile updated successfully');
          var prof_updated_fresherscorner= document.getElementById("prof_fresherscorners_uccess_updated");
          prof_updated_fresherscorner.style.display="block";

        }
        
  
  
     });
  
  
     var Userdata_wpno = 
     {
     "Whatsapp No":stu_wpno,
     };
      
   
      userref_wpno.update(Userdata_wpno,function(error){
           
       
       if(error)
           {
             var errorCode = error.code;
             var errorMessage = error.message;
             console.log(errorCode);
             console.log(errorMessage);
   
         
           }
          else{
   
           console.log('whatsapp no updated to profile');
           var userid = firebase.auth().currentUser.uid;
     firebase.database().ref('Users/'+ userid).once('value').then(function(snapshot){
      
       
       if(snapshot.val())
       {
          console.log('Profile updated with whatsapp no');//Add code who have updated their profile with whatsapp no.
          
          
   
       
       }
       else
       {
         console.log('Profile not updated with whatsapp no');;//Add code here for the people who haven't updated their profile without whatsapp no.
         
   
       }
       
   
     });
   
   
   
           
           }
         
   
   
      });
   
   
    
  
  



















    }
  
    
  
  
  
  
  
  });
  
  
  
  
  
  
  
  