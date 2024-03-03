// JS Workaround (for not using display: grid)
allVideos = document.getElementsByClassName("video")
setTimeout(setVideosMaxWidth, 0)

window.addEventListener('resize', function(event) {
    setTimeout(setVideosMaxWidth, 0)
}, true);

function setVideosMaxWidth() {
    for (video of allVideos) {
        video.style.maxWidth = "none"
    }
    videoWidth = allVideos[0].offsetWidth
    for (video of allVideos) {
        video.style.maxWidth = `${videoWidth}px`
    }
}