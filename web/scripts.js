function load(){
   var dpto = document.getElementById("dpto") ;
   var xhr = new XMLHttpRequest();
   xhr.open("GET","Controller",true);
   xhr.onreadystatechange=function(){
       if(xhr.readyState==4 && xhr.status==200){
           var dates = JSON.parse(xhr.responseText);
           for(var i in dates){
               var option=document.createElement("option");
               option.setAttribute("value",dates[i].code);
               option.appendChild(document.createTextNode(dates[i].name));
               dpto.appendChild(option);
           }
       }
       
   }
   xhr.send(null);
}

function changeTowns(){
   var dpto = document.getElementById("dpto");
   //var code = dpto.options[dpto.selectedIdex].value;
   var code = dpto.options[dpto.selectedIndex].value;
   alert(code);
}