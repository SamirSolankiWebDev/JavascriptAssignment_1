/*
	WEB 303 Assignment 1 - jQuery
	Samir Ashok Solanki
*/


$(document).ready(function() {
    console.log("ready!");

	
	// var amount_calculation;

	 $("input").keyup(function(){
	//$("#yearly-salary").keyup(function(){
    // $("input").css("background-color", "pink");
	// var dInput = this.value;
    // console.log(dInput);
    // $(".dDimension:contains('" + dInput + "')").css("display","block");
	
	var txtbox_Salary = $('#yearly-salary').val(); 
	var txtbox_Percentage = $('#percent').val(); 

	 console.log("Salary==",txtbox_Salary);
	 console.log("PercentageVal==",txtbox_Percentage);
	 console.log(txtbox_Percentage);

	 if(txtbox_Salary.length == 0)
	 {
		alert('Please Enter Salary');
	 }

	 var amount_calculation = (txtbox_Salary * txtbox_Percentage) / 100;
		
	 console.log(amount_calculation.toFixed(2));
	  //   alert('amount_calculation ' + amount_calculation);
  
	 $("#amount_calculation").val("Result :" + amount_calculation.toFixed(2));
  
	 $('#amount').html("$"+amount_calculation.toFixed(2));

	 console.log("CAlculation==",amount_calculation.toFixed(2));


    });
     	

});