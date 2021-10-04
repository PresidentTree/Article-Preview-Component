let shareButton = document.getElementsByClassName("icon")[0];
let shareIcon = shareButton.getElementsByTagName("img")[0];
let bubble = document.getElementsByClassName("bubble")[0];
let active = false;

shareButton.onclick = function() {
  if (active == false) {
    shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareIcon.style.filter = "sepia(100%) saturate(0%) brightness(200%) contrast(100%)";
    bubble.style.display = "flex";
    active = true;
  } else {
    shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareIcon.style.filter = "none";
    bubble.style.display = "none";
    active = false;
  }
};
