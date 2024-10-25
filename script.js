document.getElementById("imageButton").addEventListener("click", function() {
   
    var contentContainer = document.getElementById("contentContainer");

    contentContainer.innerHTML = `
        <div style="text-align: center;">
            <img src="ccd.png" id="responsiveImage">
        </div>
        <button id="playPauseButton">
            <img id="playPauseIcon" src="pause.png" alt="Pause Button">
        </button>
    `;

    var audio = document.getElementById("customAudio");
    var playPauseButton = document.getElementById("playPauseButton");
    var playPauseIcon = document.getElementById("playPauseIcon");

    audio.play();

    playPauseButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseIcon.src = "pause.png";  // Change to pause icon
        } else {
            audio.pause();
            playPauseIcon.src = "play.png";  // Change back to play icon
        }
    });
});
