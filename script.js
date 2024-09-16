document.addEventListener('DOMContentLoaded', function() {
    const floatingIcon = document.getElementById('play-sound');
    const sound = document.getElementById('sound');

    floatingIcon.addEventListener('click', function() {
        sound.play();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const easterEggIcon = document.getElementById('easteregg-icon');
    const easterEggSound = document.getElementById('easteregg-sound');

    easterEggIcon.addEventListener('click', function() {
        easterEggSound.play();
    });
});