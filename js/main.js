const body = document.querySelector('body');
const elBtn = document.querySelector('.btn');
const elForm = document.querySelector('form');

let linearGradient = () => {
    const random = Math.trunc(Math.random() * 255 + 1)
    return random;
}
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    body.style.backgroundImage = `linear-gradient(43deg, rgb(${linearGradient()},${linearGradient()},${linearGradient()}) ,rgb(${linearGradient()},${linearGradient()},${linearGradient()}),rgb(${linearGradient()},${linearGradient()},${linearGradient()}))`
})