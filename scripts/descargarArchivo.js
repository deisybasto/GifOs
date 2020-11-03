
   //para revisar--------------------------------------
   /*var reader = new FileReader(); 
   reader.readAsDataURL(archivo); 
   reader.onloadend = function () { 
       var base64String = reader.result;
       var gifString=base64String.substring(22);
       let order = localStorage.length + 1;
       gifOrder = 'gif ' + order;
       localStorage.setItem(gifOrder, gifString);
   }
   
   //'buttonDownload' es un elemento que cree en mi proyecto.
   //Llamalo como vos quieras.å
   //Está comentado por que seguramente tendrás que moverlo.
   //Con la función que está adentro, una vez que apretás el botón,
   //debería descargarte el archivo
  
    buttonDownload.addEventListener('click', ()=>{
    let order=localStorage.length
 let gifOrder = 'gif ' + order
   recorder.save(localStorage.getItem(gifOrder));
  });*/
  
  //para revisar-------------------------------------
  let idGifs={};

  let labelCopy=document.getElementById('labelCopy')
  
 
  const key='addArr'
  
  let boxFileDownload= ()=>{
    document.getElementById('boxFileDownLoad').style.display='block';
}

let sendGifsLocalStr= (idurl)=>{
 idGifs.push(idurl);
 console.log(idGifs);
 localStorage.setItem(key,idGifs);
}

let showLabelCopy=()=>{
  setTimeout(()=>{
    labelCopy.style.display='none';
  },2000)
}

let copyURL =()=>{
  let aux = document.createElement('input');
  aux.setAttribute('value', `https://giphy.com/gifs/${idurl}`);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  labelCopy.style.display='block';
  showLabelCopy();
  

}