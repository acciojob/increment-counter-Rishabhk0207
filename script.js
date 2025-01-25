//your JS code here. If required.
let count = document.querySelector("[counter]");
let btn = document.querySelector("[incrementBtn]");

let add =0;
btn.addEventListener("click",(e)=>{
	alert(add);
	count.innerText = ++add;
})