function generateSequence(length) {
  let arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i);
    i += 1;
  }
}
function generateUsingJS() {
  let x = Number(document.getElementById("text").value);
  const start = window.performance.now();
  generateSequence(x);
  const end = window.performance.now();
  let performance = document.getElementById("performance");
  performance.textContent = `Execution time from JS: ${end - start}ms`;
}
