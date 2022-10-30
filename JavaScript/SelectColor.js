// Selct color from input and that color will become the background color of div.
// creating div element and appending it to body
let div=document.firstElementChild.children[1].appendChild(document.createElement('div'));
div.insertAdjacentText('beforebegin',"Selected Color:");
div.setAttribute("style", "height:100px");
div.style.width="100px";
div.style.marginBottom="10px";
div.style.border="5px inset goldenrod"
// creating input box and appending to body
let input=document.firstElementChild.children[1].appendChild(document.createElement('input'));
input.type="color";

// document.querySelector('input').addEventListener('click', function(){
//     document.querySelector('div').style.backgroundColor=document.querySelector('input').value;
// });

input.addEventListener('click', () => div.style.background=input.value);
