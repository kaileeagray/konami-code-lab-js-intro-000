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

  document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === codes[index]) {
      index++;
      console.log(e.key);

      if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
