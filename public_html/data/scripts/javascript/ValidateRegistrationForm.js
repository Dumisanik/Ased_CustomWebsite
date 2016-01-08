

function ValidateRegistrationForm(inputBoxObj){
    //var nameTxt = inputBoxObj.getAttributeNode("name");
    doesUserInputSeemGood = false;
    
    var myString = inputBoxObj.value.toString();

    if(inputBoxObj.name == "firstname" || inputBoxObj.name == "lastname" ){
        //alert("Validating..."+inputBoxObj.name );
        var intLen = myString.length;
        if(intLen==0){
            alert("Required field."+ " Put your +"+inputBoxObj.name);
        }
    }
 
  
    else if(inputBoxObj.name == "password1"){
        var intLen = myString.length;
        if(intLen<4){
            alert("Password must contain atleast four characters. !"+myString);
        }
        
    }
}

