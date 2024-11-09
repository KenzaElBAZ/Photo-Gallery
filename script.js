function upDate(previewPic) {
  console.log("Mouse over:", previewPic.alt);
  console.log("Alt text:", previewPic.alt);
  console.log("Source:", previewPic.src);

  document.getElementById("image").innerHTML = previewPic.alt;
  document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";
}

function undo() {
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";
}
