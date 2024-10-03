
function velocity6() {
  const video = document.querySelector('video');
  let customPlaybackRate = 2000;

  function simulateFastPlayback() {

      video.currentTime += (1 / 60) * customPlaybackRate;
    
      if (!video.paused) {
          requestAnimationFrame(simulateFastPlayback);
      }
  }
  video.addEventListener('play', function () {
      requestAnimationFrame(simulateFastPlayback);
  });
}
