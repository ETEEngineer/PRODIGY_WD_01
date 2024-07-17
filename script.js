
function onScroll() {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', onScroll);

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'yellow';
        item.style.color = 'black';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
        item.style.color = 'white';
    });
});
