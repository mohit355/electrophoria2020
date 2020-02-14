emailSignup=()=>{
    const signupForm = document.querySelector('#signup-form');
  
    const email = signupForm['email'].value;
    const password = signupForm['pass'].value;
  
  
  firebase.auth().createUserWithEmailAndPassword(email,password).then(function(result){
  
       console.log(result)
       console.log("Successfully linked...")
       window.location="userdashboard.html";
       
  
  
  }).catch(function(err){
  
  console.log(err)
  console.log("Failed to do")
 
  var emailexisterr = document.getElementById("exist_emailalert");
  var passweakerr = document.getElementById("weak_passalert");
  var emailnotvalkerr = document.getElementById("valid_emailalert");
  
  if (err.code === 'auth/email-already-in-use') 
  {
    emailexisterr.style.display = "block";
    passweakerr.style.display = "none";
    emailnotvalkerr.style.display = "none";
  }
  
  
  if (err.code === 'auth/weak-password') 
  {
    passweakerr.style.display = "block";
    emailexisterr.style.display = "none";
    emailnotvalkerr.style.display = "none";
  }

  if (err.code === 'auth/invalid-email') 
  {
    emailnotvalkerr.style.display = "block";
    emailexisterr.style.display = "none";
    passweakerr.style.display = "none";

  }
  
  
  
  
  })
  }
  
  
  
  
  