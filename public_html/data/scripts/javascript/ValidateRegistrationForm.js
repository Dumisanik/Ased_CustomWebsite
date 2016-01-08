

function ValidateRegistrationForm(inputBoxObj){
    //var nameTxt = inputBoxObj.getAttributeNode("name");
    //doesUserInputSeemGood = true;
    var myString = inputBoxObj.value;

    if(inputBoxObj.name == "firstname"){
        //var myString = inputBoxObj.name.toString().length;
        
        var intLen = length(myString);
        alert("Validating..."+inputBoxObj.name );
        alert("Length = "+myString);
    }
 
    else if(inputBoxObj.name == "lastname"){
        alert("Validating..."+inputBoxObj.name);
    }
  
    else if(inputBoxObj.name == "password1"){
        var intLen = length(inputBoxObj.value);
        if(intLen<4){
            alert();
            alert("Password must contain atleast four characters. !"+myString);
        }
        
    }
}

