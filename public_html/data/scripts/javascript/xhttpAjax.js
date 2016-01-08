
//Load XMLDOc, replaces the html inside the contentPanel without loading the entire page
var currentContentPanelPage = "";
function autoReplaceContentPanel(inputText){
   
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //For older browsers
    }
    
    
    //Start:
     xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById("contentPanel").innerHTML = xmlhttp.responseText;
        }

    };
    

    if(inputText == 'Home' ){  
        //alert("Opening... Home");
        xmlhttp.open("Get","home.htm", true); //home.html       //xmlhttp_info
        xmlhttp.send();
    }
    
    else if(inputText == 'AboutUs' ){  
        //alert("Opening... AboutUS");
        currentContentPanelPage = "AboutUs";
        xmlhttp.open("Get","AboutUs.htm", true); //AboutUS.html       //xmlhttp_info
        xmlhttp.send();

    }
       
    else if(inputText == "SkillsNetwork"){
        //alert("Opening.. SkillsNetwork");
        currentContentPanelPage = "SkillsNetwork";
        //xmlhttp.open("Get","SkillNetwork.txt", true);   //xmlhttp_info.txt
        xmlhttp.open("Get","data/scripts/php/getUsers.php", true);   //xmlhttp_info.txt
        xmlhttp.send();
    }  
    
    else if(inputText == "TempLink"){
        xmlhttp.open("Get","registerUser.htm", true);   //xmlhttp_info.txt
        xmlhttp.send();
        

        
        
    }    
    //$.get("somepage.php");    //Run a php script
    
    //Store the current contentPanel page name inside the browser
    localStorage.setItem("CurrentPage", inputText);                 
}

//Refresh to the current contentPanel page, 
function refreshPage(){
    //Check whats the currently opened Page
    if(localStorage.getItem("CurrentPage")==""){    //When you first open the website, go to Home page
        currentContentPanelPage = "Home";
    }
    else{
        currentContentPanelPage = localStorage.getItem("CurrentPage");  //Read whats the currently selected page
    }
    
    //alert("#Refreshing to  = "+currentContentPanelPage);
    autoReplaceContentPanel(currentContentPanelPage);
    
}
