const click1 = document.getElementById('click1');
const click2 = document.getElementById('click2');
const click3 = document.getElementById('click3');
const click4 = document.getElementById('click4');
const click5 = document.getElementById('click5');
const click6 = document.getElementById('click6');

function setBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    localStorage.setItem('background', imageUrl);
}

click1.onclick = () => setBackground('/images/desktopimg2.jpg');
click2.onclick = () => setBackground('/images/img5.jpg');
click3.onclick = () => setBackground('/images/img6.jpg');
click4.onclick = () => setBackground('/images/img7.jpg');
click5.onclick = () => setBackground('/images/img8.jpg');
click6.onclick = () => setBackground('/images/img9.jpg');

window.onload = () => {
    const savedImage = localStorage.getItem('background');
    if (savedImage) {
        setBackground(savedImage);
    }
    const loading = document.getElementById('loading');
    loading.style.display = 'flex';
    setTimeout(() => {
        loading.classList.add('animate__fadeOut');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 1000);
    }, 2000);
};