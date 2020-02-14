firebase.auth().onAuthStateChanged(function(user) {
    if(user)
    {
     console.log('User signed in');
     
     var userid = firebase.auth().currentUser.uid;
    firebase.database().ref('Answers_from_freshers/'+ userid).once('value').then(function(snapshot){
        
      var rootRef_parent = firebase.database().ref().child("Users");
      var userref_parent = rootRef_parent.child(userid);  
      
      if(snapshot.val())
        {  
           var wewanttoknowbetter_div= document.getElementById('prof_notupdated');
           wewanttoknowbetter_div.style.display="block";
           console.log('Profile updated');//Add code here for the people with updated profile with some answers.
           
           var rootRef = firebase.database().ref().child("Answers_from_freshers");
           var userref = rootRef.child(userid);
           
    
           
           
           
           var question1_val=userref.child("Question1");
           var question2_val=userref.child("Question2");
           var question3_val=userref.child("Question3");
           var question4_val=userref.child("Question4");
           var question5_val=userref.child("Question5");
           var whatsappno_val=userref_parent.child("Whatsapp No");
           var rollno_val=userref_parent.child("Roll No");
           var name_val=userref_parent.child("Full Name");

           var question_1_field = document.getElementById('question_1');
           var question_2_field = document.getElementById('question_2');
           var question_3_field = document.getElementById('question_3');
           var question_4_field = document.getElementById('question_4');
           var question_5_field = document.getElementById('question_5');
           var whatsappno_field = document.getElementById('input-wpno');
           var rollno_field = document.getElementById('input-juroll');
           var name_field = document.getElementById('input-fname');

  
           question1_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
          question_1_field.value=snapshot.val();
            
           }, function (error) {
            console.log("Error: " + error.code);
         });
      
         question2_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
          question_2_field.value=snapshot.val();
            
           }, function (error) {
            console.log("Error: " + error.code);
         });
         
         
         question3_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
          question_3_field.value=snapshot.val();
            
           }, function (error) {
            console.log("Error: " + error.code);
         });


         question4_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
          question_4_field.value=snapshot.val();
            
           }, function (error) {
            console.log("Error: " + error.code);
         });


         question5_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
          question_5_field.value=snapshot.val();
            
           }, function (error) {
            console.log("Error: " + error.code);
         });

         rollno_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
          rollno_field.value=snapshot.val();
          rollno_field.setAttribute("disabled",null); 
            
           }, function (error) {
            console.log("Error: " + error.code);
         });


         name_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
          name_field.value=snapshot.val();
          name_field.setAttribute("disabled",null); 
            
           }, function (error) {
            console.log("Error: " + error.code);
         });
      
         whatsappno_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
            whatsappno_field.value=snapshot.val();
            whatsappno_field.setAttribute("disabled",null); 
            
           }, function (error) {
            console.log("Error: " + error.code);
         });
      
      
      
  
           
           
    
        
        }
        else
        {
          console.log('Profile not updated');;//Add code here for the people who haven't updated their profile without any answer.
          var wewanttoknowbetter_div= document.getElementById('prof_notupdated');
          wewanttoknowbetter_div.style.display="block"; 
          
          var rollno_val=userref_parent.child("Roll No");
           var name_val=userref_parent.child("Full Name");
           
           var rollno_field = document.getElementById('input-juroll');
           var name_field = document.getElementById('input-fname');

           rollno_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
          rollno_field.value=snapshot.val();
          rollno_field.setAttribute("disabled",null); 
            
           }, function (error) {
            console.log("Error: " + error.code);
         });


         name_val.on("value", function(snapshot) {
             
  
            console.log(snapshot.val());
          name_field.value=snapshot.val();
          name_field.setAttribute("disabled",null); 
            
           }, function (error) {
            console.log("Error: " + error.code);
         });
      
      

          
    
        }
        
    
    
    
    
    
    
    
    });
 





    }
else{

    console.log('User not signed in');
}








});