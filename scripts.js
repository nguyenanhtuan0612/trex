const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let lastLeft = 1;

const highScore = document.getElementById('high_score');
let hpoint = parseInt(window.localStorage.getItem('highScore') || '0');
console.log(hpoint);
highScore.innerHTML = `High Score: ${hpoint}`;
let point = 0;

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');

    setTimeout(function () {
      dino.classList.remove('jump');
    }, 400);
  }
}

//setInterval(function, time)
//cu time thi chay function
let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

  // get current cactus X position
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  //chech diem
  // cactusLeft toa do hien tai cua cay 
  if (cactusLeft * lastLeft < 0) {
    point += 1;
    document.getElementById('h2d').innerHTML = `point = ${point}`;
  }

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // detect collision
    // collision
    if (point > hpoint) {
      window.localStorage.setItem('highScore', point);
      hpoint = point;
      highScore.innerHTML = `High Score: ${hpoint}`;
    }
    point = 0;
    document.getElementById('h2d').innerHTML = `point = ${point}`;
    alert('Game Over!');
    return;
  }
  //lastLeft tao do cay cua lan check diem trc
  lastLeft = cactusLeft;
}, 10);

document.addEventListener('keydown', function (event) {
  jump();
});
