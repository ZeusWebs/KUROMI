document.addEventListener("DOMContentLoaded", () => {
    const videoBox = document.getElementById("video-box");
    const videoPlayer = document.querySelector("#video-box video");
    const triggerButton = document.getElementById("continue-btn-warning"); // Replace with the button triggering the video box
    
    // Function to check visibility and adjust video settings
    function handleVideoVisibility() {
        if (videoBox.style.display === "block") {
            // Video box is visible; unmute and autoplay
            videoPlayer.muted = false;
            videoPlayer.play();
        } else {
            // Video box is not visible; pause and mute
            videoPlayer.pause();
            videoPlayer.muted = true;
        }
    }

    // Event listener for the button to show video box
    triggerButton.addEventListener("click", () => {
        videoBox.style.display = "block"; // Show the video box
        handleVideoVisibility();
    });

    // Monitor visibility changes and adjust video settings
    const observer = new MutationObserver(() => {
        handleVideoVisibility();
    });

    observer.observe(videoBox, { attributes: true, attributeFilter: ["style"] });
});




// Ensure the audio plays on page load
window.onload = function () {
    const audio = document.getElementById("kuromi-audio");
    audio.autoplay = true;
    audio.loop = true;
    audio.play(); // Start playing immediately
};

// Toggle play/pause on button click
document.getElementById("music-btn").addEventListener("click", () => {
    const audio = document.getElementById("kuromi-audio");
    if (audio.paused) {
        audio.play();
        document.getElementById("music-btn").textContent = "Pause";
    } else {
        audio.pause();
        document.getElementById("music-btn").textContent = "Play";
    }
});


            // Get the audio element
            const audio = document.getElementById('kuromi-audio');
    
            // Set the volume to 10%
            audio.volume = 0.1  ;
    
            // Optional: Start the audio playback
            audio.play();

