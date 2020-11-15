const getTrendingResults = (divSuggestedGifs, limit, offset) => {
    let giphyUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${GiphyApiKey}&limit=${limit}&offset=${offset}&rating=r`;
    getResultsFromUrl(giphyUrl, processTrendingResults, divSuggestedGifs)
};

const processTrendingResults = (results, htmlElement) => {   
    htmlElement.innerHTML = "";
    results.data.map(elm => {        
        let tagsArray = elm.slug.split('-').slice(0, 1);
        let tagsResult = `#${tagsArray.join(' #')}`;
        let divNodeHtml =  `<div id="div_${elm.id}" class="item">
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