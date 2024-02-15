const colorPairs = [
  ["#FF0000", "#FFFFFF"],
  ["#00FF00", "#0000FF"],
  ["#FFFF00", "#808080"],
  ["#800080", "#000000"],
  ["#00FFFF", "#FF00FF"],
  ["#FFA500", "#ADD8E6"],
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
