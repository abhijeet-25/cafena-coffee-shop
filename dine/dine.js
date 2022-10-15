var logo = document.querySelector('.logo>img');

setInterval(() => {
    logo.style.borderBottom = "2px solid red";
}, 3000);

setInterval(() => {
    logo.style.borderBottom = "none";
}, 3600);