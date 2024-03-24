// On lance le dé. Returns a random integer from 1 to 6.
Math.floor(Math.random() * 6);

function lancer() {

  return Math.floor(Math.random() * 6 + 1);

};

let total = lancer();
console.log(total);

document.getElementById("lancerB").onclick = function () {
  let total = lancer();
  console.log("Answer: ", total);
  let inputElement = document.getElementById("total");
  inputElement.value = total;
};
