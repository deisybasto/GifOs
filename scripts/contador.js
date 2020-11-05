
const setVisitCounter = () => {
    const $textCounter = document.querySelector('.js-counter');
    const localStorageCounter = window.localStorage.getItem('counter') || 0;
    const counter = Number(localStorageCounter) + 1;
    window.localStorage.setItem('counter', counter);
    $textCounter.innerHTML = counter;
}

/*------- assigne name -----*/
let numRandom=0;
let listRndNum=[];
const nameGif='misGifo'
let namgifFinal=''

let randomNum=(numRandom)=>{
   if(listRndNum.indexOf(numRandom)<0){
       listRndNum.push(numRandom);
      return numRandom
   }

}

let nameLstGif=()=>{
  let n=Math.round(Math.random()*1000);
  return nameGif+n
}