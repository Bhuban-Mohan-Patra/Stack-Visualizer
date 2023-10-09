// size of stack
const size= document.querySelector(".size");
// element to push
const inputElement = document.querySelector(".push-item");
// push button
const push = document.querySelector(".push");
//pop button
const pop = document.querySelector(".pop");
// reset button
const reset = document.querySelector(".reset");
// stack container
const stackContainer = document.querySelector(".stack-container");
// details information boxes
const box = document.querySelectorAll(".box");
// message box
const messageBox = document.querySelector(".message-box");
//message
const message = document.querySelector(".message");

// stack array
const stack = [];

//button disable and enable





// push

push.addEventListener("click",()=>{
    
    // if(size.value=="" || size.value<=0)
    // {
    //    messageBox.classList.add("error-message");
    //    message.innerHTML = "Enter a valid size";
    //    setTimeout(() => {
    //          messageBox.classList.remove("error-message");
    //     }, 1200);
    //    return;
    // }
     
    

    if(inputElement.value=="")
    {
       messageBox.classList.add("error-message");
       message.innerHTML = "Enter an element";
       setTimeout(() => {
             messageBox.classList.remove("error-message");
        }, 1200);
        return;
    }

    //overflow
    if(stack.length== 5)
    {
        inputElement.value = "";
        message.innerHTML = "Stack Overflow";
        messageBox.classList.add("error-message");
        setTimeout(() => {
            messageBox.classList.remove("error-message");
       }, 1200);
       return;
    }
    const inputValue = inputElement.value;
    stack.push(inputValue);


    // creating new element for stack
    const element = document.createElement("div");
    element.innerText = stack[stack.length-1];
    element.classList.add("new-element");
    stackContainer.appendChild(element);

    // update in top of stack 
    box[0].innerHTML = stack[stack.length-1]

    // animation for stack push
    element.classList.add("push-animation");
    setTimeout(() => {
        element.classList.remove("push-animation");
        
   }, 1200);
   message.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;
   messageBox.classList.add("correct-message");
   setTimeout(() => {
    messageBox.classList.remove("correct-message");
   }, 1500);
    
   // last push value
   box[1].innerHTML = inputValue;

});



pop.addEventListener("click",()=>{
    if(stack.length==0)
    {
        message.innerHTML = "Stack Underflow";
        messageBox.classList.add("error-message");
        setTimeout(() => {
            messageBox.classList.remove("error-message");
       }, 1200);
       return;
    }

    const popedValue = stack.pop();

    // pop animation
    stackContainer.lastElementChild.classList.add("pop-animation");

    setTimeout(() => {
        stackContainer.lastElementChild.classList.remove("pop-animation");
        
   }, 1200);

   message.innerHTML = `Item ${popedValue} is Poped.`;
   messageBox.classList.add("correct-message");

   setTimeout(() => {
    messageBox.classList.remove("correct-message");
    stackContainer.removeChild(stackContainer.lastElementChild);
   }, 1500);


    //top of stack
    if (stack.length == 0) {
        box[0].innerHTML = "";
    } else {
        box[0].innerHTML = stack[stack.length - 1];
    }
    // last pop value
    box[2].innerHTML = popedValue;


});

reset.addEventListener("click",()=>{

    while(stack.length!=0){
        stack.pop();
        stackContainer.removeChild(stackContainer.lastElementChild);
    }

    inputElement.value="";
    message.innerHTML="";
    box[0].innerHTML="";
    box[1].innerHTML="";
    box[2].innerHTML="";

});




