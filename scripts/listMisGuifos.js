let resultUrl='';
let totalKeyLocalStorage=Object.keys(localStorage);
let storageobject=[];

let localStorageObject=()=>{
  for (x=0; x<=localStorage.length-1; x++)  {  
    let clave = localStorage.key(x).includes('misGifo'); 
    let keyLst=localStorage.key(x)

    if(clave){
      
    let listObject=JSON.parse(localStorage.getItem(keyLst));
    let idUrlGif=listObject.data.id
    storageobject.push(idUrlGif);

    }

  }
  
}


let listMisGif=()=>{

 
   
}

window.addEventListener('load', () => {
  localStorageObject()
  console.log(storageobject);
 

    
});
/**function suggestedGifs(gif) {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=${GiphyApiKey}&limit=4`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.data[0]?.images) {
        let gif_box = document.createElement("div");
        gif_box.className = "gif-box";
        gif_box.innerHTML = `
            <div class='titleBarHeader'>
              <span>#${gif}</span><span class='close-button'><img src='./assets/images/button3.svg' /></span>
            </div>
            <div class='gif-img'>
              <img src='${data.data[0].images.original.url}'/>
              <span class='see-more'><a href='${data.data[0].bitly_url}' target='_blank'>Ver más...</a></span>
            </div>
          `;
        document.getElementById("gif_suggested").append(gif_box);
      }
    });
} */