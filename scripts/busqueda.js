document.getElementById("btnSearch").addEventListener("click", function () {
    var searchTerm = document.getElementById("inpTagSearch").value;
    getSearchResults("divResultsText", 10, 0, searchTerm);
    getTagsResults("divResultsTags", searchTerm);
});

const getSearchResults = (divResults, limit, offset, term) => {
    var htmlElement = document.getElementById(divResults);
    let giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${GiphyApiKey}&q=${term}&limit=${limit}&offset=${offset}&rating=r`;
    getResultsFromUrl(giphyUrl, processSearchResults, htmlElement)
};

const getTagsResults = (divResults, term) => {
    var htmlElement = document.getElementById(divResults);
    let giphyUrl = `https://api.giphy.com/v1/tags/related/${term}?api_key=${GiphyApiKey}`;
    getResultsFromUrl(giphyUrl, processTagsResults, htmlElement)
};


const processSearchResults = (results, htmlElement) => {   
    htmlElement.innerHTML = "";
    results.data.map(elm => {        
        var tagsArray = elm.slug.split('-').slice(0, -1);
        var tagsResult = `#${tagsArray.join(' #')}`;
        var divNodeHtml =  `<div id="div_${elm.id}" class="item">
                                <img id="img_${elm.id}" 
                                    src="${elm.images.fixed_height.url}" 
                                    class="imgItem"
                                    style="width:${elm.images.fixed_height.width}px;height:${elm.images.fixed_height.height}px">
                                </img>
                                <div class="overlay">${tagsResult}</div>
                            </div>`;
        htmlElement.innerHTML += divNodeHtml;        
    });    
}

const processTagsResults = (results, htmlElement) => {
    htmlElement.innerHTML = "";
    results.data.map(elm => {        
        var divNodeHtml =  `<button id="btn_${elm}" class="eg" onclick="getSearchResults('divResultsText',10, 0, '${elm.name}')">#${elm.name}</button>`;
        htmlElement.innerHTML += divNodeHtml;        
    });  
}

document.getElementById("inpTagSearch").addEventListener("keyup", function () {
    wordSearch = document.getElementById("inpTagSearch").value
    requestGetURL('tagsReleated', wordSearch, definitionPath);

    let display = document.getElementById("tagsBar");
    wordSearch.length > 0 ? display.style.display = 'block' : display.style.display = 'none'
});
