
var lightbox = document.getElementById('lightbox');

var lightboxImg = document.getElementById("lightbox-img");
var enlargeBtns = document.getElementsByClassName('enlarge-btn');
var images = document.getElementsByClassName('project-image');

for (let i = 0; i < enlargeBtns.length; i++) {
    enlargeBtns[i].onclick = function(){
        lightbox.style.display = "block";
        lightboxImg.src = images[i].src;
    }
}

var close = document.getElementsByClassName("close")[0];

close.onclick = function() { 
    lightbox.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == lightbox) {
        lightbox.style.display = "none";
    }
}
