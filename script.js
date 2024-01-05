function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.getElementById('playButton').addEventListener('click', function () {
    var newWindow = window.open('', 'Live Demo', 'width=800, height=600');

    newWindow.document.body.innerHTML = '<video width="100%" height="100%" controls autoplay><source src="videos/cliniclivedemo.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
});


function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.getElementById('playButton2').addEventListener('click', function () {
    var newWindow = window.open('', 'Live Demo', 'width=800, height=600');

    newWindow.document.body.innerHTML = '<video width="100%" height="100%" controls autoplay><source src="videos/snake_game-1.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
});

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.getElementById('playButton3').addEventListener('click', function () {
    var newWindow = window.open('', 'Live Demo', 'width=800, height=600');

    newWindow.document.body.innerHTML = '<video width="100%" height="100%" controls autoplay><source src="videos/turtle_crossing.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
});