//! Play/Pause Videos

// var video = document.getElementById("revelio-video");

// function playPause() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// }

// video.addEventListener("ended", function() {
//     video.currentTime = 0;
//     video.pause();
//   });

//! Open project info
var revelioDiv = document.getElementById("revelio")
const toggleRevelio = () => {
    document.body.dataset.revelio =
        document.body.dataset.revelio === "true" ? "false" : "true";
};
const togglePokemon = () => {
    document.body.dataset.pokemon =
        document.body.dataset.pokemon === "true" ? "false" : "true";
};
const toggleHabit = () => {
    document.body.dataset.habit =
        document.body.dataset.habit === "true" ? "false" : "true";
};
const toggleGithub = () => {
    document.body.dataset.github =
        document.body.dataset.github === "true" ? "false" : "true";
};
const toggleTelegram = () => {
    document.body.dataset.telegram =
        document.body.dataset.telegram === "true" ? "false" : "true";
};
const toggleMessage = () => {
    document.body.dataset.message =
        document.body.dataset.message === "true" ? "false" : "true";
        console.log("fired")
};
const toggleGoogle = () => {
    document.body.dataset.google =
        document.body.dataset.google === "true" ? "false" : "true";
        console.log("fired")
};
