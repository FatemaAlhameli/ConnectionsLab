# Project 1: Positivity and Wellbeing Webpage

Fatema Alhameli

[Website Link](https://fatemaalhameli.github.io/ConnectionsLab/Assignments/Project%201/index.html)
[Presentation Link](https://docs.google.com/presentation/d/14Xn5s2rL3WvGk88II39nAf7rOv2FqR6GlJeI0XKp0Xk/edit#slide=id.gfb426853b0_1_0)

For project 1, I developed a well-being and positivity website that contains positive messages for users. This webpage aims to have one of the easiest ways to improve one's mood by simply reading a positive message/quote or affirmation from a specific category. Depending on the user's needs, they will be able to choose a positive message from the following categories: inspirational and motivational quotes or affirmations. This webpage will be designed to help people feel better and hopefully keep one's negative feelings away. Having a positive outlook can help boost users' confidence and energy, make them feel better about themselves, and connect with others. A daily dose of positivity and mindfulness! The ideal audience for my webpage is students that need motivation in their daily education lives or anyone that is looking for positive encouragement throughout their day.

## Inspiration:
Since I am someone that feels very strongly about mindfulness and wellbeing, I wanted to create a webpage that would promote these two elements in a convenient way. I designed this webpage for both laptops and mobile users in order to have more accessibility. Another factor that really inspired me to pursue this idea was a short booklet created by an NYUAD student about mental health and well-being awareness. While looking through her Instagram page @talktechniques_, it really motivated me to create a webpage that spreads positivity. Moreover, for the design of my website, I used [wix.com](https://www.wix.com/website/templates) templates as a guide for designing the layout of the website. 

## Datasets:
In my project, I used two datasets for the development of my webpage. Initially, I was working with three datasets, affirmations, quotes, and jokes. I decided not to include jokes in my website because as I progressed in the project, I felt like it didn't fit the theme I was going with (mainly in terms of design and objective). Therefore, I used the only the affirmations and quotes dataset. The affirmation dataset was a JSON file. The dataset was originally a CSV file, so I had to convert it to JSON by using this [converter](https://www.convertcsv.com/csv-to-json.htm). The quotes dataset was an API link. It was relatively straightforward to add to the code.

## Wireframe:
<img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/Project%201%20Img/project%201%20wireframe%201.png" width = "420" height = "300"><img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/Project%201%20Img/project%201%20wireframe%202.png" width = "400" height = "290"> <img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/Project%201%20Img/project%201%20wireframe%203.png" width = "400" height = "290">

## Layout & User Interactions: 
The layout of my webpage consists of three pages, home, affirmations, and inspirational quotes. The home page welcomes the user to the website and includes a short description of the website’s goal. The affirmations and quotes pages have similar layouts. Underneath the page title, there is an empty box, and at the bottom of this box are two buttons a “New Affirmation/Quote” button and a “❤️” button. The first button allows the user to change the quote/affirmation that appears on the web from the datasets uploaded. The heart button is for the user to react to the affirmations or quotes. If the heart button is pressed, hearts fall down from the top of the screen. On the bottom of these two pages is an audio player. The audio player consists of a meditation song that a user can play when going through the affirmations and quotes. The last interaction added in the affirmations and quotes pages is a self-notes area that appears on the button right of all pages. This would allow users to write down any notes for themselves or to reflect on what they have read.

* Changing of data displayed button
* Reaction Button
* Audio Player (meditation music)
* Self Notes area (for reflection)

## Coding Progress:
I began my coding progress by creating three HTML files. In addition to the ```index.html``` page, I added one for the affirmation page and another for the quotes page. On the top right of each page, I made a menu bar with all the pages. To do this, I used a list. This would ultimately allow the user to navigate through each page. In CSS, I used ```float: left;```, ```list-style-type: none;```,  and ```display: inline-block;``` to make them appear in a horizontal form with no bullet points.

```
   <div class="Links-container">
      
       <ul class="Links">
           <li><a href="index.html">Home</a></li>
           <li><a href="affirmation.html">Affirmations</a></li>
           <li><a href="quotes.html">Inspirational Quotes</a></li>
       </ul>
       </div>

```
In both my affirmations and quotes page, I created a section that includes all the mechanisms that would allow the data to be displayed and the heart animation to work when the buttons are clicked. This section contains the page titles, buttons, classes, and ids of tags. Below is a code snippet of one of these pages.

```
   <section>
       <div class = "Main-page">
       <h1 class="Page-title">Affirmations</h1>
       </div>
       <div class="Main-screen" id="a-screen"></div>
       <br>
     
       <div class="Btn-screen">
           <button class= "Button"  id="aff-btn">New Affirmation</button> <button class="Reaction-btn" id="rbtn">❤️</button>
       </div>
 
   </section>
```
In order for these interactions to work I need JavaScript. Like we went through in class I fetched the data then made sure it is displayed in the console. I did this for both datasets. This is an example of one of the datasets. 

```
window.addEventListener('load', () => {
 fetch('https://type.fit/api/quotes')
   .then(resp => resp.json())
   .then(data => {
     mydata = data;
     maxln = mydata.length;
   })
```


I want to make a few changes in the airfrmations dataset. So I followed the same fetching steps and I stored the data in a new array and filtered out two affirmations categories which were love and money. I excluded them to make the data content focus more self positivity and mindfulness. I looped through the array and used an if statement to exclude the tags I didnt want from the dataset. Below is a snippet:


```
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
   })
 
```
I then proceeded to create a function for each dataset. In these functions I used ids to access the div and buttons that will control the appearance of the data on the webpage. I stored them in two different variables. I added an event listener, ‘click’ for the buttons.  For the quotes data I needed to display both the quote and the author name. I used the tags names (text and author) from the dataset to display them alongside two p tags. Similarly, I followed the same steps for the affirmations data but only used the affirmation tag that is from the dataset to display the text. For both functions I created two variables named index  and max length and set them to 0. These variables are to make the data rest once it went through all the data. For instance, if the user keeps changing the quote with the button and reaches the very last quote the data should then restart from the beginning. To do so I used an if statement, which is shown below. 


```
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
```
I then pasted the JS function names accordingly in the HTML files in a script tag. 

<img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/Project%201%20Img/function%201.png" width = "260" height = "100"> <img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/Project%201%20Img/function%202.png" width = "260" height = "100">

For the heart reaction button to work I needed access the button from JS with the button id. I then added a click event. I then add my [p5 code](https://editor.p5js.org/FatemaAlhameli/sketches/jwuxz7z0q). In the event listener, I pasted the for loop that created a random locations for the falling hearts. 
```
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
```
In setup, I created a canvas that for the animation. I added an if and else statement to ensure that when the mobile version is used the canvas size would adjust. I think that there is still space for improvement in the mobile version. Then in draw, I added a background and I call two functions that draw and move the hearts. These functions are placed in a class I created for the hearts animation. The class is placed in a separate JS file and is link in the HTML files. 
```
function setup() {
  let x = 383;
  let w = window.innerWidth;
  if(w <= 395){
    let cnv = createCanvas(x, 600);
    cnv.parent("animation");
  } else{
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
class Emoji {
   constructor(xPos, yPos) {
     this.x = xPos;
     this.y = yPos;
     this.speed = 5;
   }
   drawEmoji() {
     textSize(64);
     text("❤️", this.x, this.y);
   }
   moveEmoji() {
     this.y = (this.y + this.speed);
   }
 }
```



Another element I added to my HTML pages is an audio player. The audio player was simple to add as I used the audio tag. I added the text “Listen to me!” that appears on top of the audio player. This label is meant to show the user that there is an audio for them on the webpage.

```
   <div class="Audio-text"><b>Listen to me!</b></div>
   <audio controls>
       <source src="assets/audio.ogg" type="audio/ogg">
       <source src="assets/audio.mp3" type="audio/mpeg">
   </audio>
```
The last element I added to the HTML code was the notes area interaction. This interaction included a ```<textarea>``` and a button under it. What I wanted was to make the text area appear/slide up when the button is pressed. To make this interaction work I had to use CSS and JavaScript. Since I wanted the button to stay fixed on the screen at all times I used ```position: fixed;```  in CSS alongside other properties to adjust its shape and appearance. In JavaScript, I created a function called ``` function textslide () {}``` for the interaction. I created variables and accessed the button and text area in the HTML code by using ids. I then added a click event to them. In this event I added an if else statement that indicates that if the button is clicked the text area would slide open by the height increasing, else if pressed the height of the text area would go back to zero hence closing the text area. I then added the function in both the affirmations and quotes HTML files in the script tag that I made earlier for other functions. 

```

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
```

The CSS code in general was straightforward to write. However, I had to make sure I was using suitable properties to style my HTML elements. Some properties were repetitive, like margin and padding properties, alignment, font properties, colors, background images, height, width, and flex. 

Styling the buttons was very enjoyable. CSS has many properties that allow’s one to style a button in many ways. For example, I changed the shape of the buttons and used ```.hover``` to change the color and cursor when the user hovered on the button. I used this [reference](https://www.freecodecamp.org/news/css-button-style-hover-color-and-background/) to guide me through the button styling. 

```
.Button{
   height: 40px;
   width: 150px;
   font-size: 17px;
   font-weight: 700;
   background-color: #f7d5ba;
   color: #544645;
   border:none;
   border-radius:20px;
   font-family: 'Times New Roman', Times, serif;
   font-style: italic;
}
 
.Button:hover{
   background-color:#b1bfb4;
   transition: 0.7s;
   cursor: pointer; 
}
```

Another main element I used in CSS was the property ```@media(max-width: 400px){}```. This property allowed me to style the mobile version of the website. It helped adjust all the elements into the size of a phone. I did this by copy and pasting the classes I wanted to edit in @media. 

## Key Challenges & Solutions:

1. One of the main challenges I faced was coming up with suitable user interactions for the website. I thought long and hard about what interactions to add. I wanted the interactions to be as valuable and useful as possible for my ideal users. I ended up showing my project wireframe to one of my family members that really holds the topic of positivity and wellbeing close to their hearts. She mentioned that if she were using this website, she would like to access meditation music while reading the affirmations easily. Additionally, she said that having a place to write down her notes/reminders for herself on the website would be very convenient and helpful for the whole experience. In a nutshell, adding these interactions would ultimately improve the user experience for my ideal audience.

2. Incorporating p5.js was another obstacle I struggled with. Although I created the p5 interaction, and the code was working, I mainly struggled with adding the p5 code to the JavaScript code I already had for my website. The Professor offered her assistance with this, and although I went through it with her, I still struggled with executing it on my code. However, after a few trials, I was able to make it work. The logic turned out to be straightforward. I already created a button that would control the animation. In JavaScript, I set it up as, if the “heart” button is clicked the animation would work. I also had to create a canvas in Javascript, which would be on top of the affirmation/quote texts. Then using CSS, I have to change the background using ```z-index``` and ```position: absolute``` so that the text wouldn't be covered by the animation canvas. 

3. The last key struggle I came across was styling in CSS. Moving and aligning elements was, at times, tricky. Significantly when I added the background video on the home page. All the divs that included the heading, description and the other page's links on the home page were covered by the video. After hours of google searches and trial and error, I found the property ```z-index```. This property made all the elements under the video appear on top of it. 
Another styling issue I had was the gradient background. It was pretty simple to add with CSS and it worked perfectly, however when I added the p5 canvas the gradient would appear under the canvas. I tired looking for ways to add a gradient background on JavaScript but it required a bit of work and changing of code. This is the [example](https://p5js.org/examples/color-linear-gradient.html) I was following. I tried adding the similar code but it ended up messing everything up and my animation stopped working. So what I did instead is make the background of the div title gradient from top to bottom and change the canvas color to the same color that is at the bottom of the gradient background in the title div. Therefore, it created a gradient background for the whole section which turned out to look very nice. 


<img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/Project%201%20Img/bg%201.png" width = "420" height = "300"> <img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/Project%201%20Img/bg%202.png" width = "420" height = "300">

The canvas I created also seemed to have a larger width than the rest of backgrounds on the web. In JS, I used ```width.innerWidth``` for the size of the canvas. But every time I tried to add a number to make the width aligned with the rest of the elements on the webpage it didn’t work. However, I was able to fix it on the mobile version.

## Lessons & Next Steps: 
Throughout the development process of this project, I was able to learn key lessons about creating a website for a certain audience. By communicating with my ideal audience, I was able to understand the different user perspectives and needs. Trying things on my own alongside trial and error allowed me to learn more about the three programming languages. 

* Change the order of the way data is presented. Try to make it so that the data is displayed in a random order rather than the same order all the time when the button is pressed
* For the affirmations data, I could make categories for types of affirmations, and the user could choose their desired category 
* Think of different ways to design the audio play and make it more responsive
* Add more than one song to the audio player
* Add a placeholder in affirmation and quotes container
* Make the audio play when the page loads
* Improve mobile version

## References: 
* [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Button Styling](https://www.freecodecamp.org/news/css-button-style-hover-color-and-background/)
* [Web Designing](https://www.wix.com/website/templates)
* [p5.js Interaction Inspiration](https://github.com/FatemaAlhameli/Intro-to-IM-/blob/main/Assignments/Assignment%203:%20Objects.md)
* [Logo](https://www.canva.com/)
* [Text Area Reference 1](https://css-tricks.com/textarea-tricks/)
* [Text Area Reference 2](https://www.w3schools.com/tags/tag_textarea.asp)
* [Text Area Reference 3](https://www.codeproject.com/Questions/5324080/How-do-I-make-a-textarea-unique-to-its-button)



