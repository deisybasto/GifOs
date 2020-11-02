const setVisitCounter = () => {
    const $textCounter = document.querySelector('.js-counter');
    const localStorageCounter = window.localStorage.getItem('counter') || 0;
    const counter = Number(localStorageCounter) + 1;
    window.localStorage.setItem('counter', counter);
    $textCounter.innerHTML = counter;
}
