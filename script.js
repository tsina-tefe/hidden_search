const container = document.querySelector('.larger');

document.querySelector('button').addEventListener('click', () => {
    if(container.classList.contains('show')) {
        container.classList.remove('show');
    } else {
        container.classList.add('show');
    }
});