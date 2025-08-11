const YT = document.querySelector('[data-name="yt"]');
const brave = document.querySelector('[data-name="brave"]');
const insta = document.querySelector('[data-name="insta"]');
const fb = document.querySelector('[data-name="fb"]');

YT.onclick = () => window.open('https://youtube.com', '_blank');
brave.onclick = () => window.open('https://search.brave.com/', '_blank');
fb.onclick = () => window.open('https://facebook.com/', '_blank');
insta.onclick = () => window.open('https://instagram.com/', '_blank');