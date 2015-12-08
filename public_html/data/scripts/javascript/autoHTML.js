/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){       //Or $(function(){
    

    //jQuery();      //Instead of using JQuery(), you can use the dollar sign :-) $()

    //Mouse Over Functions for the menu
    function MenuMouseEnter(){
        jQuery(this).css("background","white");  
        $(this.getElementsByTagName("a")).css("color","black");
    }
    function MenuMouseExit(){
        jQuery(this).css("background","none");  
        $(this.getElementsByTagName("a")).css("color","white");
    }
    $("li.MenuListElem").mouseover(MenuMouseEnter);
    $("div.EntireMenu li").mouseleave(MenuMouseExit)


    /*Menu Click, create an AJAX DOM Way of setting the content inside Div.ContentPanel*/
    /*
    function MenuButtonClick(){
        var linkElem = document.querySelector('link[rel="import"]');
        var importedDoc = link.import;
        $("contentPanel").append(importedDoc);
        
    }
    
     $("li.MenuListElem").click(MenuButtonClick);
     */


});