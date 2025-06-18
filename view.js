let nav = document.querySelector("nav");
let board = document.querySelector(".keybord");
let man = document.querySelector(".man");
let word = "Hang Man";
let letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
let parts = [
  [
    "top",
    "rope",
    "head",
    "body",
    "arm-r",
    "arm-l",
    "leg-r",
    "leg-l",
    "shaft",
    "base",
  ],
  ["rope", "head", "body", "arm-r", "arm-l", "leg-r", "leg-l"],
  [],
];

//create navigation bar
const navHTMLArray = [];
for (let lett = 0; lett < word.length; lett++) {
  let y = word[lett];
  navHTMLArray.push("<span>" + y + "</span>");
}
nav.innerHTML = navHTMLArray.join('');

//craete hangman picture
const fragment = document.createDocumentFragment();
for (let n = 0; n < parts[0].length; n++) {
  let part = parts[0][n];
  let div = document.createElement("div");
  div.classList.add(part);
  if (parts[1].includes(part)) {
    div.classList.add("invicible");
    parts[2].push(div);
  }
  fragment.appendChild(div);
}
man.appendChild(fragment);

//create key board
const boardHTMLArray = [];
for (let m = 0; m < letters.length; m++) {
  let ltt = letters[m];
  boardHTMLArray.push('<button id = "' + ltt.toLowerCase() + '">' + ltt + "</button>");
}
board.innerHTML = boardHTMLArray.join('');

export { parts };
