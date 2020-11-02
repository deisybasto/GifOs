

let tagsSearch=[]
let tagsAutocomplate = []
let i=0;
document.getElementById("inpTagSearch").addEventListener("keyup", function () {
    console.log('keyup')
    let labelTags = JSON.parse(localStorage.getItem('searchFunction'));
    
    let sizeArrTags = labelTags.data.length;
     tagsAutocomplate = []
    let tags = labelTags.data;
    
    

    if (sizeArrTags == 0) {
        let displayes = document.getElementById("tagsBar");
        displayes.style.display = 'none'
    } else {
        tags.map((label, i) => {
            if (i < 3) return tagsAutocomplate.push(label.name)
            
        });
        
    }
  
    document.getElementById("tagsBar").innerHTML =
        `<div class="tagsAutocmplate">
     ${tagsAutocomplate.map((tags, i)=> {
            return `
                <div class="labelTags" onClick='tagsComplete(${i})'>
                <p id="labelTags${i}" onClick='tagsComplete(${i})'>${tags}</p>
                </div>
              `                   
        }).join('')}
    </div>`
    
} 

);

//txtAutocomplete
function tagsComplete(labels){
    let word=document.getElementById(`labelTags${labels}`).textContent   
    document.getElementById("inpTagSearch").value=word
    document.getElementById("tagsBar").style.display='none'
    getSearchResults("divResultsText", 10, 0, word);
    
}
