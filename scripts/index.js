let GiphyApiKey = "ls1v2WktTF5MQ5RpyEQkhIV7WKIW7PBs";

const styleLink = document.getElementById('themeCss');
const themeBarMenu = document.getElementById('themeMenu');
const dayThemeBtn = document.getElementById('dayThemeBtn');
const nightThemeBtn = document.getElementById('nightThemeBtn');
const localStorageTheme = window.localStorage.getItem('theme') || '';

const setTheme = (theme) => {
  if (theme === 'sailorDay') {
    styleLink.href = "assets/themes/pink/pink-style.css";
  } else if (theme === 'sailorNight') {
    styleLink.href = "assets/themes/purple/purple-style.css";
  }
};

setTheme(localStorageTheme);


const changeCSS = (theme) => {
  window.localStorage.setItem('theme', theme);
  setTheme(theme);
}

const openThemeMenu = () => {
  const currentClasses = themeBarMenu.className;

  if (currentClasses.includes('isOpen')) {
    themeBarMenu.className = 'themesBarMenu';
  } else {
    themeBarMenu.className = 'themesBarMenu isOpen';
  }
};

const onSelectTheme = (theme) => {
  if (theme === 'sailorDay') {
    dayThemeBtn.className = 'themesBarMenuBtn isSelected';
    nightThemeBtn.className = 'themesBarMenuBtn';
    setTheme('sailorDay');
    window.localStorage.setItem('theme', 'sailorDay');
  } else if (theme === 'sailorNight') {
    nightThemeBtn.className = 'themesBarMenuBtn isSelected';
    dayThemeBtn.className = 'themesBarMenuBtn';
    setTheme('sailorNight');
    window.localStorage.setItem('theme', 'sailorNight');
  }
  themeBarMenu.className = 'themesBarMenu';
  selectTheme();
};


const getTagSearchResults = () => {
  let tagToFind = document.getElementById("inpTagSearch").value;
  let divResults = document.getElementById("divResultsTags");
  let giphyUrl = `http://api.giphy.com/v1/gifs/search/tags?q=${tagToFind}&api_key=${GiphyApiKey}&limit=25&offset=0&rating=r&lang=es`;
  getResultsFromUrl(giphyUrl, processResults, divResults)
}

const changeTheme = () => {
  /*
      1 elegir el tema de la lista
      2 cambiar el tema en theme_css
      3 guardar la eleccion el localstorage
  */
  let currentStyle = document.getElementById("theme_css");
  currentStyle.href = "assets/themes/pink/css/purple-style.css";
}

(function () {
  const divSuggestedGifs = document.getElementById("divSuggestedGifs");
  getTrendingResults(divSuggestedGifs, 24, 0);
  setVisitCounter();
})();

//Sugerencias
function suggestedGifs(gif) {
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
}

let myArray = [
  "Dugtrio",
  "Celebi",
  "SakuraCardCaptor",
  "SailorMoon",
  "Togepi",
  "Gatomon",
  "Lapras",
  "Mewtwo",
  "Bulvasaur",
  "Squirtle",
  "Medabots",
  "baby+yoda",
  "adventure+time",
  "oh+shit",
  "rick+and+morty",
  "the+office",
  "sillicon+valley",
  "the+mandalorian",
  "pulp+fiction",
  "fight+club",
  "it",
  "godzilla",
  "wtf",
  "trippy",
  "ron+swanson",
  "radiohead"
];
let rand = function () {
  let myArraynew = [];
  let compara = myArray[Math.floor(Math.random() * myArray.length)];
  while (myArraynew.length < 4) {
    if (!myArraynew.includes(compara)) {
      myArraynew.push(compara);
    }
    compara = myArray[Math.floor(Math.random() * myArray.length)];
  }
  return myArraynew;
};
data = rand();
if (document.body.clientWidth < 500) {
    window.onload = suggestedGifs(data[Math.floor(Math.random() * data.length)]);
} 
else {
  for (let i = 0; i < data.length; i++) {
    window.onload = suggestedGifs(data[i]);
  }
}

function upload() {
  window.location.href = "crear.html";
  }

  
function grabar() {
  window.location.href = "recordGifo.html";
  }