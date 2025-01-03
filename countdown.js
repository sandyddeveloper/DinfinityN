const Countdown = (date) => {
  console.log(`Countdown set to: ${date}`);
  const targetTime = new Date(date).getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance <= 0) {
      clearInterval(interval);
      document.querySelector(".countdown-message").innerText =
        "Countdown finished!";
      document.querySelector(".days .angka").innerText = "0";
      document.querySelector(".hours .angka").innerText = "0";
      document.querySelector(".minutes .angka").innerText = "0";
      document.querySelector(".seconds .angka").innerText = "0";
    } else {
      document.querySelector(".days .angka").innerText = days;
      document.querySelector(".hours .angka").innerText = hours;
      document.querySelector(".minutes .angka").innerText = minutes;
      document.querySelector(".seconds .angka").innerText = seconds;
    }
  }, 1000);
};

// Initialize the countdown
Countdown("2025-03-10T10:30:00");

const musicPlayer = document.querySelector(".music-player");
const playButton = document.querySelector(".play-button");
const audio = document.querySelector("#my-audio");

let isPlaying = true;

playButton.addEventListener("click", () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});

function playAudio() {
  isPlaying = true;
  musicPlayer.classList.add("playing");
  playButton.innerHTML = '<i class="bx bx-headphone"></i>';
  audio.play();
}

function pauseAudio() {
  isPlaying = false;
  musicPlayer.classList.remove("playing");
  playButton.innerHTML = '<i class="bx bx-caret-right"></i>';
  audio.pause();
}

audio.addEventListener("ended", () => {
  pauseAudio();
});
