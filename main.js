function makeSound(key) {
  switch (key) {
    case "w":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;

    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var hat = new Audio("sounds/hat.mp3");
      hat.play();
      break;

    case "h":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
}

function animate(key) {
  var active = $("." + key);
  //   console.log(active);
  $(active).addClass("pressed");
  setTimeout(function () {
    $(active).removeClass("pressed");
  }, 200);
}

$(document).on("keydown", function (e) {
  makeSound(e.key);
  animate(e.key);
});

$("button").on("click", function () {
  var btn = $(this).text();
  btn = btn.substring(9, 10);
  makeSound(btn);
  animate(btn);
});
