let definitionPath = '/tags';
let word = '';
class SearchPath {
    constructor(

        wordSearch,
        endpoint,
        apiKey = "ls1v2WktTF5MQ5RpyEQkhIV7WKIW7PBs",

    ) {
        this.endpoint = endpoint;
        this.wordSearch = wordSearch;
        this.apiKey = apiKey;
    };

}

const searchObject = new SearchPath(word, definitionPath);

let wordBusqueda = searchObject.wordSearch,
    endPoint = searchObject.endpoint,
    key = searchObject.apiKey;

//guardar en localstorage el resultado de la consulta de endpoint
function searchFunction(request) {
    const path =
        fetch(`https://api.giphy.com/v1/gifs/search${request}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('searchFunction', JSON.stringify(data));
        })
        .catch(error => {
            return error;
        })
}

let requestGetURL = (metodo, wordsearch, urlGet = '') => {
    endpoint = '';
    wordBusqueda = wordsearch;

    metodo == 'getSearchResults' ?
        endpoint += `?api_key=${key}&q=${wordBusqueda}` :
        endpoint += `${urlGet}?api_key=${key}&q=${wordBusqueda}`;

    return (searchFunction(endpoint));
};

//capturar el valor para el endpoin search
document.getElementById("btnSearch").addEventListener("click", function () {
    document.getElementById("btnSearch").addEventListener("mousedown", function () {
        document.getElementById("labelSearch").style.border = '1px dotted #110038'
    })
    document.getElementById("btnSearch").addEventListener("mouseup", function () {
        document.getElementById("labelSearch").style.border = 'none'
    })
    document.getElementById('tagsBar').style.display = "none"

    wordSearch = document.getElementById("inpTagSearch").value
    requestGetURL('getSearchResults', wordSearch);


    // ------------roman----------------

    gifsFound = JSON.parse(localStorage.getItem('searchFunction'));

    document.getElementById('title-resultados').innerHTML = (wordSearch + ':');

    function insertarBuscados(gifsFound) {
        document.getElementById('suggested-trends').style.display = "none";
        document.getElementById('suggestions').style.display = "none";
        document.getElementById('results-found').style.display = "block";
        document.querySelector('.sr__container').style.display = "block";

        for (i = 0; i < 10; i++) {
            var ctrlId = `sr-${i}`;
            if (document.getElementById(ctrlId)) {
                var ctrlVal = gifsFound.data[i].id
                document.getElementById(ctrlId).setAttribute('src', 'https://media.giphy.com/media/' + `${ctrlVal}` + '/giphy.gif');
            }
        }

    }

    insertarBuscados(gifsFound);

    function getSearchSug(wordSearch) {

        let found = fetch('https://api.giphy.com/v1/tags/related/' + `${wordSearch}` + '?' + '&api_key=' + 'MEzLGHsEgB21300IkEEPzSpYzn9V8brD')
            .then(response => {
                return response.json();
            })
            .then(data => {
                localStorage.setItem('gifsSearchSug', JSON.stringify(data));
                console.log(data);
            })
            .catch(error => {
                return error;
            })
    }

    getSearchSug(wordSearch);

    let sugResult = document.getElementById('eg1');
    let simResult2 = document.getElementById('eg2');
    let simResult3 = document.getElementById('eg3');

    objSearchSug = JSON.parse(localStorage.getItem('gifsSearchSug'));

    sugResult.innerHTML = '#' + objSearchSug.data[0].name;
    simResult2.innerHTML = '#' + objSearchSug.data[1].name;
    simResult3.innerHTML = '#' + objSearchSug.data[2].name;



});

document.getElementById('eg1').addEventListener('click', () => {


    gifsHash = JSON.parse(localStorage.getItem('gifsSearchSug'));

    let search = gifsHash.data[0].name;

    document.getElementById('title-resultados').innerHTML = (search + ':');

    function getSearchResults(term) {

        let found = fetch('http://api.giphy.com/v1/gifs/search?' + 'api_key=' + 'MEzLGHsEgB21300IkEEPzSpYzn9V8brD' + `&q=${term}` + '&limit=10')

            .then(response => {
                return response.json();
            })
            .then(data => {
                localStorage.setItem('gifsGuardados', JSON.stringify(data));
                console.log(data);
            })
            .catch(error => {
                return error;
            });

    }
    getSearchResults(search);


    let gifsFound = JSON.parse(localStorage.getItem('gifsGuardados'));

    function insertarBuscados(gifsFound) {

        for (i = 0; i < 10; i++) {
            var ctrlId = `sr-${i}`;
            if (document.getElementById(ctrlId)) {
                var ctrlVal = gifsFound.data[i].id
                document.getElementById(ctrlId).setAttribute('src', 'https://media.giphy.com/media/' + `${ctrlVal}` + '/giphy.gif');
            }
        }

    }

    insertarBuscados(gifsFound);

})

document.getElementById('eg2').addEventListener('click', () => {


    gifsHash = JSON.parse(localStorage.getItem('gifsSearchSug'));

    let search = gifsHash.data[1].name;

    document.getElementById('title-resultados').innerHTML = (search + ':');

    function getSearchResults(term) {

        let found = fetch('http://api.giphy.com/v1/gifs/search?' + 'api_key=' + 'MEzLGHsEgB21300IkEEPzSpYzn9V8brD' + `&q=${term}` + '&limit=10')

            .then(response => {
                return response.json();
            })
            .then(data => {
                localStorage.setItem('gifsGuardados', JSON.stringify(data));
                console.log(data);
            })
            .catch(error => {
                return error;
            });

    }
    getSearchResults(search);


    let gifsFound = JSON.parse(localStorage.getItem('gifsGuardados'));

    function insertarBuscados(gifsFound) {

        for (i = 0; i < 10; i++) {
            var ctrlId = `sr-${i}`;
            if (document.getElementById(ctrlId)) {
                var ctrlVal = gifsFound.data[i].id
                document.getElementById(ctrlId).setAttribute('src', 'https://media.giphy.com/media/' + `${ctrlVal}` + '/giphy.gif');
            }
        }

    }

    insertarBuscados(gifsFound);

})

document.getElementById('eg3').addEventListener('click', () => {


    gifsHash = JSON.parse(localStorage.getItem('gifsSearchSug'));

    let search = gifsHash.data[2].name;

    document.getElementById('title-resultados').innerHTML = (search + ':');

    function getSearchResults(term) {

        let found = fetch('http://api.giphy.com/v1/gifs/search?' + 'api_key=' + 'MEzLGHsEgB21300IkEEPzSpYzn9V8brD' + `&q=${term}` + '&limit=10')

            .then(response => {
                return response.json();
            })
            .then(data => {
                localStorage.setItem('gifsGuardados', JSON.stringify(data));
                console.log(data);
            })
            .catch(error => {
                return error;
            });

    }
    getSearchResults(search);


    let gifsFound = JSON.parse(localStorage.getItem('gifsGuardados'));

    function insertarBuscados(gifsFound) {

        for (i = 0; i < 10; i++) {
            var ctrlId = `sr-${i}`;
            if (document.getElementById(ctrlId)) {
                var ctrlVal = gifsFound.data[i].id
                document.getElementById(ctrlId).setAttribute('src', 'https://media.giphy.com/media/' + `${ctrlVal}` + '/giphy.gif');
            }
        }

    }

    insertarBuscados(gifsFound);

})