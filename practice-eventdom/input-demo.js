function greeting(){
    let i =document.querySelector('input[name="shimei"]'); 
    let p =document.querySelector('p#message'); 
    let aisatu='こんにちは,'+i.value+'さん'
    p.textContent=aisatu;
} 
let b=document.querySelector('button#print'); 
b.addEventListener('click',greeting);
