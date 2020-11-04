   
  
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