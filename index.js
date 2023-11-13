document.addEventListener("DOMContentloaded",function(){
    let value =document.getElementById("value");
    let buttons=document.getElementById(".btn");

    let currentInput="";

    buttons.forEach(function(button))
    {
        button.addEventListener("Click",function())
    }

    if(button.textContent === "0"){
    currentInput=currentInput.slice(0 -1);

    }else if(button.textContent ==="/"){
        currentInput="";

    }else if(button.textContent === "="){
        try{
            currentInput=
            eval(currentInput).toString();
        }catch(error){
            currentInput="Error";
        } else{
            currentInput += button.textContent;
        }
        display.value = currentInput
       

    }
})