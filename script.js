const button=document.querySelector(".btn");

function addElement(){
        var main=document.querySelector(".tasklist");       //we get the tasklist div
        var element=document.createElement("p");            //we create element p 
        element.setAttribute("class", "tasks");                    //we set id to the new element
        var value= document.querySelector(".task").value;   //we get value from bar
        element.append(value);                              // we join them together
        main.append(element);

    element.onclick=function(){                          //onclick it deletes element
    element.parentNode.removeChild(element);             //we access parent and then remove child as it is tree structure. 
    }

}

button.onclick=addElement;

