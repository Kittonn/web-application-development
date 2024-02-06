const colorPairs = [
  ["#ccccff", "#ffcccc"],
  ["#33ff99", "#99ff33"],
  ["#ff99ff", "#99ffff"],
  ["#ff6633", "#33ff66"],
  ["#ffff66", "#66ffff"],
  ["#ff9933", "#33ff99"],
];

let colorIndex = 0;
const colorPairLength = colorPairs.length;
let timer = null;

function startTimer() {
  const postColorUpdate = () => {
    const now = new Date();
    postMessage({
      dateTime: now,
      colorPair: colorPairs[colorIndex++ % colorPairLength],
    });
  };

  postColorUpdate();

  timer = setInterval(postColorUpdate, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

self.onmessage = function (e) {
  if (e.data === "start") {
    startTimer();
  }

  if (e.data === "stop") {
    stopTimer();
  }
};
