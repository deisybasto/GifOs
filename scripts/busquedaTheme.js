class Theme {
    constructor(color,
        backgroundColor,
        borderColor) {
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
    }
}
// definir temas pink

let pinkActiveTheme = () => {

    const pinkTheme = new Theme('#110038', '#F7C9F3', '#110038');
    let styleBtn = document.getElementById("btnSearch");

    styleBtn.style.backgroundColor = pinkTheme.backgroundColor;
    styleBtn.style.color = pinkTheme.color;
    styleBtn.style.border = `1px solid ${pinkTheme.borderColor}`;

}

let pinkDefaultTheme = () => {
    const pinkThemeDefault = new Theme('#B4B4B4', '#E6E6E6', ' #808080')
    let styleBtn = document.getElementById("btnSearch");

    styleBtn.style.backgroundColor = pinkThemeDefault.backgroundColor;
    styleBtn.style.color = pinkThemeDefault.color;
    styleBtn.style.border = `1px solid ${pinkThemeDefault.borderColor}`;
}
///definir temas purple

let purpleActiveTheme = () => {

    const purpleTheme = new Theme('#FFFFFF', '#EE3EFE ', '#110038');
    let styleBtn = document.getElementById("btnSearch");

    styleBtn.style.backgroundColor = purpleTheme.backgroundColor;
    styleBtn.style.color = purpleTheme.color;
    styleBtn.style.border = `1px solid ${purpleTheme.borderColor}`;

}

let purpleDefaultTheme = () => {
    const purpleThemeDefault = new Theme('#8F8F8F', '#B4B4B4', ' #808080')
    let styleBtn = document.getElementById("btnSearch");

    styleBtn.style.backgroundColor = purpleThemeDefault.backgroundColor;
    styleBtn.style.color = purpleThemeDefault.color;
    styleBtn.style.border = `1px solid ${purpleThemeDefault.borderColor}`;
}

function selectTheme(){
    wordSearch = document.getElementById("inpTagSearch").value
    // activar botón de acuerdo al tema
    let localStrTheme = window.localStorage.getItem('theme');

    if (wordSearch.length > 0) {
        localStrTheme == 'sailorDay' ? pinkActiveTheme() : purpleActiveTheme();
    }
    else {
        localStrTheme == 'sailorDay' ? pinkDefaultTheme() : purpleDefaultTheme();
    }
 }

document.getElementById("inpTagSearch").addEventListener("keyup", function () {
 selectTheme();
});
