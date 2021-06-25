console.log("expanding cards");
const imgHolders = {
  ih0: document.getElementById("ih0"),
  ih1: document.getElementById("ih1"),
  ih2: document.getElementById("ih2"),
  ih3: document.getElementById("ih3"),
  ih4: document.getElementById("ih4"),
  ih5: document.getElementById("ih5"),
};

function active(img) {
  //Object.keys(imgHolders).filter(imh => imh !== img).map(imh => imgHolders[imh].setAtrribute("class", "img-holder"));
  //imgHolders[img].setAtrribute("class", "img-holder-active");
  for (let i = 0; i < 6; i++) {
    let elm = document.getElementById(`ih${i}`);
    if (i == img) {
      elm.setAttribute("class", "image-holder-active");
    } else {
      elm.setAttribute("class", "image-holder");
    }
  }
}
