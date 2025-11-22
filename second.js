et a=document.querySelectorAll("h2")
let b=Array.from(a)

let num=0;
for(let i of b){
    num++;

    if(num%2==0){
        i.style.color="yellow";
    }else{
        i.style.color="red";
    }
}