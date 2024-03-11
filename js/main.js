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
// nextElement.addEventListener("click", nextSlide);
function nextSlide() {
  currentIndex++;
  if (currentIndex == imgsElement.length) {
    currentIndex = 0;
  }
  console.log("next", currentIndex);
  var imgSrc = imgsElement[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = "url(" + imgSrc + ")";
}

// prevElement.addEventListener("click", prevSlide);
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgsElement.length - 1;
  }
  console.log("prev", currentIndex);
  var imgSrc = imgsElement[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = "url(" + imgSrc + ")";
}

// closeElement.addEventListener("click", closeSlide);
function closeSlide() {
  boxContainer.classList.replace("d-flex", "d-none");
}

// startWordAnimation();

var navbar = document.getElementById("main-nav");

window.onscroll = function () {
  if (window.innerWidth >= 992) {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      navbar.classList.remove("transparent");
    } else {
      navbar.classList.add("transparent");
    }
  } else {
    navbar.classList.remove("transparent");
  }
};

window.onload = function () {
  if (window.innerWidth < 992) {
    navbar.classList.remove("transparent");
  }
};

function formSubmit(event) {
  event.preventDefault();
  sendEmail();
}

function sendEmail() {
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let phone = document.getElementById("phoneInput").value;
  let subject = document.getElementById("subjectInput").value;
  let message = document.getElementById("messageInput").value;

  let body = `Dear Eurogreen Tech Team,

Please see below for the message and my contact information:

Message:
${message}

Phone Number: ${phone}

best regards,
${name}

`;
  const encodedBody = encodeURIComponent(body);
  window.open(
    `mailto:eurogreentech@outlook.com?subject=${subject}&body=${encodedBody}`
  );
}
