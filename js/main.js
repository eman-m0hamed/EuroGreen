var imgsElement = Array.from(document.querySelectorAll(".item img"));
var innerBox = document.getElementById("innerBox");
var boxContainer = document.getElementById("boxContainer");
var closeElement = document.getElementById("close");
var nextElement = document.getElementById("next");
var prevElement = document.getElementById("prev");
var currentIndex = 0;
for (var i = 0; i < imgsElement.length; i++) {
  imgsElement[i].addEventListener("click", function (event) {
    boxContainer.classList.replace("d-none", "d-flex");
    var imgSrc = event.target.getAttribute("src");
    innerBox.style.backgroundImage = "url(" + imgSrc + ")";
    currentIndex = imgsElement.indexOf(event.target);
  });
}
nextElement.addEventListener("click", nextSlide);
function nextSlide() {
  currentIndex++;
  if (currentIndex == imgsElement.length) {
    currentIndex = 0;
  }
  console.log("next", currentIndex);
  var imgSrc = imgsElement[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = "url(" + imgSrc + ")";
}

prevElement.addEventListener("click", prevSlide);
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgsElement.length - 1;
  }
  console.log("prev", currentIndex);
  var imgSrc = imgsElement[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = "url(" + imgSrc + ")";
}

closeElement.addEventListener("click", closeSlide);
function closeSlide() {
  boxContainer.classList.replace("d-flex", "d-none");
}

document.addEventListener("keyup", function (e) {
  if (e.code == "ArrowRight") {
    nextSlide();
  } else if (e.code == "ArrowLeft") {
    prevSlide();
  } else if (e.code == "Escape") {
    closeSlide();
  }
});

boxContainer.addEventListener("click", function (e) {
  if (e.target.getAttribute("id") == "boxContainer") {
    closeSlide();
  }
});

/*get started button*/
// document.addEventListener('DOMContentLoaded', function() {
//     const playButton = document.getElementById('playButton');
//     const videoContainer = document.getElementById('videoContainer');

//     playButton.addEventListener('click', function() {
//       // Show the video container
//       videoContainer.classList.remove('hidden');

//       // You can also play the video programmatically
//       const overviewVideo = document.getElementById('overviewVideo');
//       overviewVideo.play();
//     });
//   });
// script.js
// script.js
// script.js

// script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const getStartedBtn = document.getElementById('getStartedBtn');
//     const videoModal = document.getElementById('videoModal');
//     const closeBtn = document.getElementById('closeBtn');
//     const overviewVideo = document.getElementById('overviewVideo');

//     getStartedBtn.addEventListener('click', function() {
//       videoModal.classList.remove('hidden');
//       overviewVideo.play();
//     });

//     closeBtn.addEventListener('click', function() {
//       hideVideoModal();
//     });

//     overviewVideo.addEventListener('ended', function() {
//       hideVideoModal();
//     });

//     function hideVideoModal() {
//       videoModal.classList.add('hidden');
//       overviewVideo.pause();
//       overviewVideo.currentTime = 0; // Reset video to the beginning
//     }
//   });
// script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const getStartedBtn = document.getElementById('getStartedBtn');
//     const videoModal = document.getElementById('videoModal');
//     const closeBtn = document.getElementById('closeBtn');
//     const overviewVideo = document.getElementById('overviewVideo');

//     getStartedBtn.addEventListener('click', function() {
//       videoModal.classList.remove('hidden');
//       overviewVideo.play();
//     });

//     closeBtn.addEventListener('click', function() {
//       hideVideoModal();
//     });

//     overviewVideo.addEventListener('ended', function() {
//       hideVideoModal();
//     });

//     function hideVideoModal() {
//       videoModal.classList.add('hidden');
//       overviewVideo.pause();
//       overviewVideo.currentTime = 0; // Reset video to the beginning
//     }
//   });



// home page main heading animation
const word = [
  "T",
  "e",
  "c",
  "h",
  "n",
  "o",
  "l",
  "o",
  "g",
  "y",
  "<i class='fa-solid fa-leaf'></i>",
];
const animatedWord = document.getElementById("animated-word");

function startWordAnimation() {
  let currentLetterIndex = 0;
  let startInterval;
  let endInterval;
  startInterval = setInterval(() => {
    if (currentLetterIndex < word.length) {
      // adding letter span
      const letterSpan = document.createElement("span");
      letterSpan.innerHTML = word[currentLetterIndex];
      letterSpan.style.animation = `revealAnimation 0.5s forwards`;
      animatedWord.appendChild(letterSpan);
      currentLetterIndex++;

      //   adding pointer span
      //   const pointerSpan = document.createElement("span");
      //   pointerSpan.textContent = "|";
      //   pointerSpan.style.animation = "blinkAnimation 0.5s infinite";
      //   animatedWord.appendChild(pointerSpan);

      //   removing pointer span
      // setTimeout(() => {
      //     animatedWord.removeChild(pointerSpan);
      //   }, 150);
    } else {
      clearInterval(startInterval);
      setTimeout(() => {
        endInterval = setInterval(() => {
          if (currentLetterIndex > 0) {

            const letterSpan = animatedWord.lastChild;

            // adding pointer span
            // const pointerSpan = document.createElement("span");
            // pointerSpan.textContent = "|";
            // pointerSpan.style.animation = "blinkAnimation 0.5s infinite";
            // animatedWord.appendChild(pointerSpan);

            // remove letter span
            animatedWord.removeChild(letterSpan);
            currentLetterIndex--;

            // remove pointer span
            // setTimeout(() => {
            //   animatedWord.removeChild(pointerSpan);
            // }, 150);

            // stop removing interval
            if (currentLetterIndex === 0) {
              clearInterval(endInterval);
              setTimeout(startWordAnimation, 500); // Start animation again after a delay
            }
          }
        }, 300);
      }, 1500); // Delay before starting to remove letters
    }
  }, 300);
}

startWordAnimation();
