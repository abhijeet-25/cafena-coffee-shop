let openingLogo = document.getElementById('openingLogo');

setInterval(() => {
    openingLogo.style.boxShadow = "0px 0px 4px 4px #d3ad7f";
}, 3000);
setInterval(() => {
    openingLogo.style.boxShadow = "none";
}, 3600);