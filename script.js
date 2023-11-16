let nav = document.querySelector('nav');
let open = document.querySelector('.open');
let close = document.querySelector('.close');

function toggle() {
    if (open.style.display === 'block' || open.style.display === '') {
        open.style.display = 'none';
        close.style.display = 'block';
        nav.style.display = 'block';
    } else {
        open.style.display = 'block';
        close.style.display = 'none';
        nav.style.display = 'none';
    }
}

function resetStyles() {
    if (window.innerWidth > 800) {
        // Reset styles to their normal form
        open.style.display = 'none';
        close.style.display = 'none';
        nav.style.display = 'flex';
    }
    else{
        open.style.display = 'block';
        close.style.display = 'none';
        nav.style.display = 'none';
    }
}

// Add an event listener for the resize event
window.addEventListener('resize', resetStyles);

