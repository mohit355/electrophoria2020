firebase.auth().onAuthStateChanged(function(user) {
    if(user)
    {
       var rootRef = firebase.database().ref().child("Users");
       var userid = firebase.auth().currentUser.uid;
       var userref = rootRef.child(userid);
       
       var nameref = userref.child("Full Name");
       var emailref = userref.child("Email id");
       var mobnoref = userref.child("Ph no");
       var rollnoref = userref.child("Roll No");
       var yearref = userref.child("Year");
    
       var show_prof_name = document.getElementById("show_prof_name");
       var show_prof_email = document.getElementById("show_prof_email");
       var show_prof_mobno = document.getElementById("show_prof_mobno");
       var show_prof_rollno = document.getElementById("show_prof_rollno");
       nameref.once('value', function(datasnapshot)
          {
    
    
           name.innerText = datasnapshot.val();
           show_prof_name.innerText = datasnapshot.val();
           console.log(datasnapshot.val());
    
    
          });

          emailref.once('value', function(datasnapshot)
          {
    
    
           name.innerText = datasnapshot.val();
           show_prof_email.innerText = datasnapshot.val();
           console.log(datasnapshot.val());
    
    
          });
       
          mobnoref.once('value', function(datasnapshot)
          {
    
    
           name.innerText = datasnapshot.val();
           show_prof_mobno.innerText = datasnapshot.val();
           console.log(datasnapshot.val());
    
    
          });

          rollnoref.once('value', function(datasnapshot_roll)
          {
              

            yearref.once('value', function(datasnapshot)
          {
    
    
           

           name.innerText = datasnapshot_roll.val();
           show_prof_rollno.innerText = datasnapshot_roll.val()+" ("+datasnapshot.val()+")";
           console.log(datasnapshot_roll.val(),datasnapshot.val());
    
    
          });
    
    
           
    
    
          });
       
       
       
       
    
    
    
    }
    else{
       console.log('User not signed in');
    }
    
    
    
    
    
    
    
    
    
    
    });
    
    
    
    