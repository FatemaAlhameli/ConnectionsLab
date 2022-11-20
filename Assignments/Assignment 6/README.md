#  Rivescript Library
[Working Link](https://fatemaalhameli.github.io/ConnectionsLab/Assignments/Assignment%206/#edge)

For this week's assignment, I decided to create a simple website using the Rivescript library. Since I worked on three.js in class I wanted to explore a different library. Rivescript allows you to develop interactive chatbots. The chatbot I created is called Quote Bot, and its main purpose is to share with users a few inspirational quotes.

### Wireframe: 
  <img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/Quotebot.jpeg" width = "420" height = "300">
### Progress

This chatbot was created using HTML, Javascript, CSS, and a rive file. I started with setting up the HTML page that consisted of divs that will store the messages and a form that included a text input. This input is where the user would type the messages. I assigned everything ids and classes in order to use in my CSS and app.js. 

In my rive file, I created a script containing the data between the bot and the user. Writing the Rivescript is pretty simple, there are a few commands to be familiar with + and -. The first line in the file should contain what version of Rivescipt your using. Then you use the + command to trigger a line of text that the user would enter as a message. Then use the - command to define the response to that specific trigger. This is the basic way to write what you want the conversation between the bot and the user to look like. Therefore, I added the potential messages a user would write in the chat and how my bot would reply. 

```
! version = 2.0

+ hello
- Hello, what is your name?

+ hi
- Hi, what is your name?

+ (my name is *|*)
- Nice to meet you <star>, I am here to tell you some inspirational quotes, would you like to hear one?
- Nice meeting you <star>, I am here to tell you some inspirational quotes, would you like to hear one?

+ (yes|i would like to)
- Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. Francis of Assisi
- If opportunity doesn't knock, build a door. Milton Berle
- We will fail when we fail to try. - Rosa Parks
- Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi
```

In app.js, I needed to initialize the Rivesciprt by adding this line of code ```let bot = new RiveScript();```.  In order to link my rive file in my app.js file I needed this code below:

```
let quotebot = [
   './quotebot.rive'
];
bot.loadFile(quotebot).then(botReady).catch(botNotReady);
```
I then created variables for the messages div, form, and input from my HTML and accessed them using ids. I then added an event listener “submit” to the form. After that, I created two functions botReply and selfReply. In both, by using ```inner.html``` I accessed the messages div and created a new div for each that would display the bot's messages and users' messages.  I then added a function called botReady. This function is to have the word “Hello” displayed once the user is in the chat. 


### Learning Points 

I feel a like this library was very straightforward and simple to understand. By going through the documentation and a few examples I was able to easily understand its basic functions and commands. Although it is simple I feel like there is so much more one can create using this library, especially with bots. When looking at the documentation I read about a few ways how you can make your bot much more interactive and fun by having random responses and other things. There are so many possibilities with this library. I learned that it doesn't take much to understand how to use a new library, going through the documentation and a few examples is all it takes! 

### References: 

https://www.rivescript.com/docs/tutorial#project-directory

https://medium.com/@awesammcoder/javascript-tutorial-simple-chatai-using-rivescript-js-4f0291e298f1
