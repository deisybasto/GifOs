let id=0;
let hAux, mAux, sAux;
let barId=0

let initCrono= ()=>{
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("timer").innerHTML="00:00:00";
    writeCrono();
    id = setInterval(writeCrono,1000);
}      

let writeCrono= ()=>{
     
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("timer").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}

let stopCrono= ()=>{
    clearInterval(id);
}

let paints=()=>{
    let themeColor=localStorage.getItem('theme')
    for(let i=0;i<=sAux;i++){
    let divBar=document.getElementById(`timer_div_${i}`)
    console.log(i)
   if(sAux>=1){
       if(themeColor=='sailorDay')
       {
           divBar.style.background='#F7C9F3'
        }
       else{
          divBar.style.background='#EE3EFE'
       }
   }
}
}
