const portPool = [];
const dataTest = [];
onconnect = function (e) {
  let port = e.ports[0];
  portPool.push(port);
  console.log(portPool);
  port.onmessage = function (e) {
    fetch(`${e.data[2]}/multiply?number1=${e.data[0]}&number2=${e.data[1]}`)
      .then((res) => res.json())
      .then((data) => {
        dataTest.push(data.result);
        portPool.forEach((port) => {
          port.postMessage(dataTest.join());
        });
      });
  };
};
