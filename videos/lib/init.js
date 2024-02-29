function init() {
  const pauseButton = document.getElementById('pause-button');
  const nextButton = document.getElementById('next-button');
  const fasterButton = document.getElementById('faster-button');
  const slowerButton = document.getElementById('slower-button');

  pauseButton.addEventListener('click', () => {
    if (isLooping()) return noLoop();
    loop();
  });

  nextButton.addEventListener('click', () => {
    redraw();
  });

  fasterButton.addEventListener('click', () => {
    frameRate(getFrameRate() * 1.5);
  });

  slowerButton.addEventListener('click', () => {
    frameRate(getFrameRate() * 0.75);
  });
}

document.addEventListener('DOMContentLoaded', init);
