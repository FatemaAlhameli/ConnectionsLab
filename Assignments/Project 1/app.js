let index = 0;
let mydata = new Array();
let mydata1 = new Array();
let maxln = 0;
let emoji = [];
let noEmoji = 30;
let buttonIsClicked = false;

window.addEventListener('load', () => {
  fetch('https://type.fit/api/quotes')
    .then(resp => resp.json())
    .then(data => {
      mydata = data;
      maxln = mydata.length;
    });

  fetch('positive_affirmation.json')
    .then(resp1 => resp1.json())
    .then(data1 => {
      mydata1 = data1;
      let filteredData = new Array();
      for (let i = 0; i < mydata1.length; i++) {
        if (mydata1[i].Tag == "love" || mydata1[i].Tag == "money") {

        } else {
          filteredData.push(mydata1[i]);
        }
      }
      maxln = filteredData.length;
      mydata1 = filteredData;
    });

  let reactionButton = document.getElementById("rbtn");
  reactionButton.addEventListener("click", () => {
    buttonIsClicked = true;
    for (let i = 0; i < noEmoji; i++) {
      let xPos = Math.random() * width;
      let yPos = Math.random() * height;
      emoji[i] = new Emoji(xPos, yPos);
    }
  })
});


function quotesPage() {
  let qScreen = document.getElementById('q-screen');
  let loadBtn1 = document.getElementById('quote-btn');
  loadBtn1.addEventListener('click', (e) => {
    let myQuote = mydata[index];
    let qText = "<p>" + myQuote.text + "</p>";
    qText += "<p>" + myQuote.author + "</p>";
    qScreen.innerHTML = qText;
    index++;
    if (index > maxln) {
      index = 0;
    }
  });
}

function affirmationPage() {
  let aScreen = document.getElementById('a-screen');
  let loadBtn2 = document.getElementById('aff-btn');
  loadBtn2.addEventListener('click', (e) => {
    let aText = mydata1[index].Affirmation;
    aScreen.innerHTML = aText;
    index++;
    if (index > maxln) {
      index = 0;
    }
  })
}

function textslide() {
  let boxSize = '150px';
  let nButton = document.getElementById('notesbutton');
  let textBox = document.getElementById('textbox');
  nButton.addEventListener('click', (e) => {
    let boxHeight = textBox.style.height
    if (boxHeight == boxSize) {
      textBox.style.height = '0px';
      window.setTimeout(function () {
        textBox.style.display = 'none';
      }, 501);
    } else {
      window.setTimeout(function () {
        textBox.style.display = 'block';
      }, 501);
      textBox.style.height = boxSize;
    }
  });
}

function setup() {
  let x = 374;
  let w = window.innerWidth;
  if (w <= 395) {
    let cnv = createCanvas(x, 600);
    cnv.parent("animation");
  } else {
    let cnv = createCanvas(window.innerWidth, 600);
    cnv.parent("animation");
  }
}

function draw() {
  background(177, 191, 180);
  for (let i = 0; i < emoji.length; i++) {
    emoji[i].drawEmoji();
    emoji[i].moveEmoji();
  }
}

