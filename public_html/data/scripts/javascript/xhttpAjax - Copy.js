
//Load XMLDOc
function autoReplaceContentPanel(inputText){
   
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //For older browsers
    }
    
    
    //alert("inputText = "+inputText);
    
    if(inputText == 'Home' ){  
        //alert("Opening... Home");
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                document.getElementById("contentPanel").innerHTML = xmlhttp.responseText;
            }

        };

        xmlhttp.open("Get","home.txt", true); //home.html       //xmlhttp_info
        xmlhttp.send();
    }
    
    if(inputText == "SkillsNetwork"){
        //alert("Opening.. SkillsNetwork");
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                document.getElementById("contentPanel").innerHTML = xmlhttp.responseText;
            }

        };

        xmlhttp.open("Get","SkillNetwork.txt", true);   //xmlhttp_info.txt
        xmlhttp.send();
        
    }
    
    if(inputText == "SkillsNetwork"){
        //alert("Opening.. SkillsNetwork");
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                document.getElementById("contentPanel").innerHTML = xmlhttp.responseText;
            }
        };
        //xmlhttp.open("Get","SkillNetwork.txt", true);   //xmlhttp_info.txt
        xmlhttp.open("Get","data/scripts/php/getUsers.php", true);   //xmlhttp_info.txt
        xmlhttp.send();
    }  
    
    if(inputText == "TempLink"){
        //alert("Opening.. SkillsNetwork");
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                document.getElementById("contentPanel").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("Get","data/scripts/php/getUsers.php", true);   //xmlhttp_info.txt
        xmlhttp.send();
    }    
    $.get("somepage.php");
    

    
}
