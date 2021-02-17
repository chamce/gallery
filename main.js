const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    let path = 'images/pic' + i + '.jpg';
    newImage.setAttribute('src', path);
    thumbBar.appendChild(newImage);
    newImage.onclick = function () {
        displayedImage.src = path;
    }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function () {
    if (btn.className === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}