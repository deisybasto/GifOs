
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
   //Llamalo como vos quieras.
   //Está comentado por que seguramente tendrás que moverlo.
   //Con la función que está adentro, una vez que apretás el botón,
   //debería descargarte el archivo
  
    buttonDownload.addEventListener('click', ()=>{
    let order=localStorage.length
 let gifOrder = 'gif ' + order
   recorder.save(localStorage.getItem(gifOrder));
  });*/
  
  //para revisar-------------------------------------

  let boxFileDownload= ()=>{
    document.getElementById('boxFileDownLoad').style.display='block';
}