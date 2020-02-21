$("#payment_method_actual").change(function() {
    var div_cashpay = document.getElementById('div_cashpay');
    var div_onlinepay = document.getElementById('div_onlinepay');
    
    
    if ($(this).val() == "cash_pay") {
        div_cashpay.style.display="block";
        div_onlinepay.style.display="none";
        
        
        
          
        
    } 
    
    else if($(this).val() == "online_pay") {
        div_cashpay.style.display="none";
        div_onlinepay.style.display="block";
        
        			
    }
    else{
        div_cashpay.style.display="none";
        div_onlinepay.style.display="none";
        

    }
});
$("#category").trigger("change");