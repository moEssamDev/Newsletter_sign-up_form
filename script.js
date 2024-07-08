document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });
});

function validateEmail() {
  let email = document.getElementById("email").value;
  let regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z])?$/;

  if (regex.test(email)) {
    document.getElementById("email").style.borderColor = "hsl(231, 7%, 60%)";
    localStorage.setItem("userEmail", email);
    window.location.href = "/page/success.html";
  } else {
    document.getElementById("email").style.color = "#ff5160";
    document.getElementById("email").style.borderColor = "#ff5160";
    document.getElementById("email").style.backgroundColor = "#ff00005e";
    return false;
  }
}

function updateIllustrationCover() {
  const screenwidth = window.innerWidth;

  if (screenwidth <= 700) {
    document.getElementById("cover").src =
      "assets/images/illustration-sign-up-mobile.svg";
  } else {
    document.getElementById("cover").src =
      "assets/images/illustration-sign-up-desktop.svg";
  }
}

updateIllustrationCover();
window.addEventListener("resize", updateIllustrationCover);
