function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.getElementById('playButton').addEventListener('click', function () {
    var newWindow = window.open('', 'Live Demo', 'width=800, height=600');

    newWindow.document.body.innerHTML = '<video width="100%" height="100%" controls autoplay><source src="videos/taiyang clinic livedemo.mov" type="video/mp4">Your browser does not support the video tag.</video>';
});