// Grid Assignment
// Muhammad Sheikh
// oct.27,2018
// Extra for Experts:
//


let borders;
let finishCube;
let bx = 0;
let by = 0;
let rows = 5;
let cols = 5;
let grid;
let cellSize;
let state = 0;
let direction = 0;
let stat;
let death;

function preload() {
  grid = loadStrings("assets/Levels.txt");
}

function setup() {
  let borders = grid[1];
  let death = grid[4];
  let player = grid[2];
  let finishCube = grid[3];
  stat = grid.length[2];
  createCanvas(600, 600);
  rows = grid[0].length;
  cols = grid[0].length;
  cellSize = width / cols;
  cleanUpTheGrid();
}

function draw() {
  player();
  if (grid[state][by][bx] === 7 && direction === 0) {
    grid[state][by][bx] -= 2;
    state++;
    state%=grid.length;
    grid[state][stat[state][0]][stat[state][1]] += 2;
  }
  background(255);
  displayGrid();
}

function cleanUpTheGrid() {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split("");  //turns it into a 2d array
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === "2") {
        fill(0,0,255);
      }
      else if (grid[y][x] === "1"){
        fill(0,150,0);
      }
      else if (grid[y][x] === "3"){
        fill(random(255),0,random(255));
      }
      else {
        fill(255);
      }
      noStroke();
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function player(){
  for (let a = 0; a < grid[state].length; a++){
    for (let b = 0; b < grid[state].length; b++){
      if (grid[state][a][b]=== 2 || grid[state][a][b] === 7) {
        bx = a;
        by = b;
        return;
      }
    }
  }

}

function keyPressed() {
  if (direction === 0) {
    if (key === "d" ) {
      direction = 1;
    }
    else if (key === "d") {
      direction = 2;
    }
    else if (key === "s") {
      direction = 3;
    }
    else if (key === "a") {
      direction = 4;
    }
    else if (key === "r") {
      grid[state][stat[state][0]][stat[state][1]]+=2;
      grid[state][by][bx] -= 2;
      player();
      direction = 0;
    }
  }
}


function moveCube(){
  if (direction === 1) {
    if (by === 0) {
      grid[state][stat[state][0]][stat[state][1]]+=2;
      grid[state][by][bx]-=2;
      direction=0;
      return;
    }
    else {
      if (grid[state][by-1][bx] === 1) {
        direction=0;
        return;
      }
      else if (grid[state][by-1][bx] === 3) {
        grid[state][by][bx]-=2;
        state++;
        state%=grid.length;
        grid[state][stat[state][0]][stat[state][1]] += 2;
        direction = 0;
        return;
      }
      else if (grid[state][by-1][bx] === 4) {
        grid[state][stat[state][0]][stat[state][1]] += 2;
        grid[state][by][bx] -= 2;
        player();
        direction = 0;
        return;
      }
      else {
        grid[state][by][bx] -= 2;
        grid[state][by-1][bx] += 2;
        return;
      }
    }
  }

  if (direction === 2) {
    if (bx === grid[state][by].length - 1) {
      grid[state][stat[state][0]][stat[state][1]] += 2;
      grid[state][by][bx] -= 2;
      direction = 0;
      return;
    }
    else {
      if (grid[state][by][bx+1] === 1) {
        direction = 0;
        return;
      }
      else if (grid[state][by][bx+1] === 3) {
        grid[state][by][bx] -= 2;
        state++;
        state%=grid.length;
        grid[state][stat[state][0]][stat[state][1]] += 2;
        direction = 0;
        return;
      }
      else if (grid[state][by][bx+1] === 4) {
        grid[state][stat[state][0]][stat[state][1]] += 2;
        grid[state][by][bx] -= 2;
        player();
        direction = 0;
        return;
      }
      else {
        grid[state][by][bx] -= 2;
        grid[state][by][bx+1] += 2;
        return;
      }
    }
  }

  if (direction === 3) {
    if (by === grid[state].length-1) {
      grid[state][stat[state][0]][stat[state][1]] += 2;
      grid[state][by][bx] -= 2;
      direction = 0;
      return;
    }
    else {
      if (grid[state][by+1][bx] === 1) {
        direction = 0;
        return;
      }
      else if (grid[state][by+1][bx] === 3) {
        grid[state][by][bx] -= 2;
        state++;
        state%=grid.length;
        grid[state][stat[state][0]][stat[state][1]] += 2;
        direction = 0;
        return;
      }
      else if (grid[state][by+1][bx] === 4) {
        grid[state][stat[state][0]][stat[state][1]] += 2;
        grid[state][by][bx] -= 2;
        player();
        direction = 0;
        return;
      }
      else {
        grid[state][by][bx] -= 2;
        grid[state][by+1][bx] += 2;
        return;
      }
    }
  }

  if (direction === 4) {
    if (bx === 0) {
      grid[state][stat[state][0]][stat[state][1]] += 2;
      grid[state][by][bx] -= 2;
      direction = 0;
      return;
    }
    else {
      if (grid[state][by][bx-1] === 1) {
        direction=0;
      }
      else if (grid[state][by][bx-1] === 3) {
        grid[state][by][bx] -= 2;
        state++;
        state%=grid.length;
        grid[state][stat[state][0]][stat[state][1]] += 2;
        direction = 0;
      }
      else if (grid[state][by][bx-1] === 4) {
        grid[state][stat[state][0]][stat[state][1]] += 2;
        grid[state][by][bx] -= 2;
        player();
        direction = 0;
        return;
      }
      else {
        grid[state][by][bx] -= 2;
        grid[state][by][bx-1] += 2;
      }
    }
  }
}
