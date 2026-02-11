const container = document.querySelector('.larger');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () => {
    container.classList.toggle('show');
    input.focus();
});