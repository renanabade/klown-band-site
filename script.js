// script.js

document.addEventListener('DOMContentLoaded', function() {
    const floatingIcon = document.getElementById('play-sound');
    const sound = document.getElementById('sound');

    floatingIcon.addEventListener('click', function() {
        sound.play();
    });
});
