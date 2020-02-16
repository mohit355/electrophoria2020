$("#stud_year").change(function() {
    var option_food = document.getElementById('food_notrequired');
    var option_tees = document.getElementById('tees_notrequired');
    var form_section = document.getElementById('form_section');
    if ($(this).val() == "Freshers of 2020") {
        form_section.style.display="block";
        option_food.style.display="none";
        option_tees.style.display="none";
        
        
        
          
        
    } 
    
    else {
        form_section.style.display="block";
        option_food.style.display="block";
        option_tees.style.display="block";
        
        			
    }
});
$("#category").trigger("change");