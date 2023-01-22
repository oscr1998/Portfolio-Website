// ! Delay Function
function delayFunction(fn) {
  setTimeout(fn, 0);
}

//! ########## Background mouse tracking ##########
const left = document.getElementById("left-side");

const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

delayFunction(function(){
  document.onmousemove = e => handleMove(e);

  document.ontouchmove = e => handleMove(e.touches[0]);
});

//! ########## Title Wave animation ##########

var title = document.querySelector(".titleAnim");
var letters = title.textContent.split("");
title.textContent = "";
for (var i = 0; i < letters.length; i++) {
  var span = document.createElement("span");
  span.textContent = letters[i];
  span.style.animationDelay = (i / 10) + "s";
  title.append(span);
  if(i === 6){
    var span = document.createElement("span");
    span.textContent = ".";
    span.style.visibility = "hidden"
  title.append(span)
  }
}

var title = document.querySelector(".titleAnim2");
var letters = title.textContent.split("");
title.textContent = "";
for (var i = 0; i < letters.length; i++) {
  var span = document.createElement("span");
  span.textContent = letters[i];
  span.style.animationDelay = (i / 10) + "s";
  title.append(span);
  if(i === 6){
    var span = document.createElement("span");
    span.textContent = ".";
    span.style.visibility = "hidden"
  title.append(span)
  }
}


