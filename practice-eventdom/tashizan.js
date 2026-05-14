function Keisan(){
    let a =document.querySelector('input[name="left"]'); 
    let b=document.querySelector('input[name="right"]'); 

    let a1=a.value; 
    let b1=b.value; 

    let c= Number(a1)+Number(b1); 
    let answer=document.querySelector('span#answer'); 
    answer.textContent=c;   
}
let butn=document.querySelector('button#calc');
butn.addEventListener('click',Keisan); 