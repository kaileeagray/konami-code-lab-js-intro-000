const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const input = document.querySelector('input')
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === codes[index]) {
      index++;
      console.log(index);

      if (index === codes.length) {
        console.log("done!");
        delete window.alert;
        alert("Hurray!");
        index = 0;
      }
    } else {
      console.log("else, index: " + index + " key: " + e.key);
      index = 0;
    }
  });
}
