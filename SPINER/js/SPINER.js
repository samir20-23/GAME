
let spinning = false;

function spinWheel() {
  if (!spinning) {
    spinning = true;
    let wheel = document.getElementById('wheel');
    let segments = wheel.getElementsByClassName('segment');
    let deg = 2000 * Math.random();
    let animationTime = 3000; // 3 seconds

    wheel.style.transition = `transform ${animationTime}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
    wheel.style.transform = `rotate(${deg}deg)`;

    setTimeout(() => {
      spinning = false;
      let winner = getWinner(deg, segments);
       alert(`Congratulations! You won: ${winner.innerText}`);
    }, animationTime);
  }
}

function getWinner(deg, segments) {
  let segmentAngle = 3600 / segments.length;
  let normalizedDeg = (deg % 3600 + 3600) % 3600; // Normalize angle to positive value
  let winner = segments[Math.floor(normalizedDeg / segmentAngle)];
  return winner;
}

