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
for (let lett = 0; lett < word.length; lett++) {
  let y = word[lett];
  let z = "<span>" + y + "</span>";
  nav.innerHTML += z;
}

//craete hangman picture
for (let n = 0; n < parts[0].length; n++) {
  let part = parts[0][n];
  let div = document.createElement("div");
  div.classList.add(part);
  if (parts[1].includes(part)) {
    div.classList.add("invicible");
    parts[2].push(div);
  }
  man.appendChild(div);
}

//create key board
for (let m = 0; m < letters.length; m++) {
  let ltt = letters[m];
  let p = '<button id = "' + ltt.toLowerCase() + '">' + ltt + "</button>";
  board.innerHTML += p;
}

export { parts };
