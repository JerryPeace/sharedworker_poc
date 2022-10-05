const endpoint = window.origin;
if (typeof Worker === "undefined") {
  alert("Oops, your browser doesn't support Web Worker!");
}

function multiply() {
  let first = document.querySelector("#number1");
  let second = document.querySelector("#number2");

  let multiplied = document.querySelector(".result1");

  if (!!window.SharedWorker) {
    let myWorker = new SharedWorker("shared-worker.js", 'myworker');

    myWorker.port.postMessage([first.value, second.value, endpoint]);

    myWorker.port.onmessage = function (e) {
      multiplied.textContent = e.data;
    };
  }
}
