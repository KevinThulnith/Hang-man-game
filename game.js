let keys = document.querySelector(".keybord").querySelectorAll("button");
let mdbtts = document.getElementById("wndw1").querySelectorAll("button");
let livesboard = document.querySelector(".banner").querySelector("span");
let cont = document.querySelector(".container");
let panel = document.querySelector(".word");
let last = document.getElementById("wndw3");
let banners = last.querySelectorAll("header");
let glives = parts[2].length;
let gamewrd = "";
let letters = [];
let used = [];
let mode = 0;

//select mode and get random game word
mdbtts.forEach((btt) => {
  btt.addEventListener("click", () => {
    mode = eval(btt.id);
    gamewrd = rndword(mode);
    cont.scrollTop = 690;
    displaywrd();
  });
});

//display word spaces
function displaywrd() {
  console.log(gamewrd);
  panel.innerHTML = "";
  letters = [];
  for (let ind = 0; ind < gamewrd.length; ind++) {
    const element = gamewrd[ind];
    let div = document.createElement("div");
    div.classList.add("letter");
    div.classList.add("invici");
    div.innerHTML = element;
    div.id = element;
    panel.appendChild(div);
    letters.push(div);
  }
}

//add functionality to user key board
document.addEventListener("keypress", (key) => {
  if (/^[a-z/]+$/.test(key.key)) {
    chechADD(key.key, 1);
  }
});

//add functionality to game key board
keys.forEach((key) => {
  key.addEventListener("click", () => {
    chechADD(key.id, 0);
  });
});

//main function
function chechADD(ltt, m) {
  if (gamewrd.search(ltt) > -1) {
    for (let c = 0; c < letters.length; c++) {
      let ele = letters[c];
      if (ele.id == ltt) {
        ele.classList.remove("invici");
        letters.splice(c, 1);
        if (letters.length == 0) {
          winLoose(1);
        }
      }
    }
  } else if (!used.includes(ltt)) {
    used.push(ltt);
    getbtt(ltt);
    lives();
  }
}

//disable keyboard buttons
function getbtt(pars) {
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    if (element.id == pars) {
      element.disabled = true;
      return;
    }
  }
}

//update lives board
function lives() {
  parts[2][7 - glives].classList.remove("invicible");
  glives -= 1;
  livesboard.innerHTML = glives;
  if (glives == 0) {
    winLoose(2);
  }
}

//win lose output
function winLoose(n) {
  last.classList.remove("hide");
  if (n == 1) {
    banners[0].classList.remove("hide");
  } else if (n == 2) {
    banners[1].classList.remove("hide");
  }
}

document.getElementById("menu").addEventListener("click", () => {
  restrart();
  cont.scrollTop = 0;
  mode = 0;
});

document.getElementById("restart").addEventListener("click", () => {
  restrart();
});

function restrart() {
  //reset last window
  banners.forEach((banner) => {
    banner.classList.add("hide");
  });
  last.classList.add("hide");
  //reset game word
  gamewrd = rndword(mode);
  displaywrd();
  //reset parts
  parts[2].forEach((part) => {
    part.classList.add("invicible");
  });
  //reset keys
  keys.forEach((key) => {
    key.disabled = false;
  });
  //reset game variebles
  used = [];
  glives = parts[2].length;
  livesboard.innerHTML = glives;
}

document.querySelector(".dot").addEventListener("click", () => {
  winLoose(n);
});

import { rndword } from "./words.js";
import { parts } from "./view.js";
