# Webpage of a Past Project

[Link to Webpage](https://fatemaalhameli.github.io/ConnectionsLab/Assignments/Assignment%202/index.html)

For this week’s assignment, I decided to create a webpage for one of my previous Interactive Media class projects from Spring 2022 (Introduction to Interactive Media). This was a midterm project where I had to develop a game using p5.js. My webpage for this assignment consists of a description, image, and a video demo of the game. The webpage also includes two links; a link to the game and a link to the complete documentation of the game's development progress. 


Before starting the coding part of the webpage, I made three potential wireframes. I decided to go with the last one.

<img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/wirefram1.jpeg" width = "420" height = "300"><img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/wireframe2.jpeg" width = "420" height = "300"><img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/wireframe3.jpeg" width = "420" height = "300">

## Coding process
In the coding process, I started off the same way as we did in class. Using the h1 tag, I created my web title and added an unordered list that included my name, class name, project type, and year. I then added another heading with a tag that contained the link to play the game. Benth that, I added an image of the game. After the image, I included a description of the game by using a p tag and added a link at the end that takes you to my full documentation. Underneath, I uploaded a video demonstrating what it looks like to play the game. Lastly, I added my footer, which included contact information. 
## Challenges 
The main challenge I faced was trying to move sections on my webpage, such as description location. After browsing through [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics), I used the table technique. This technique divides the webpage into two parts left and right. I kept the image on the left and moved the description to the right. Another challenge I encountered was creating classes. I was able to successfully create the class itself and add it to both HTML and CSS files however, it did not work. For instance, when I used a specific tag in CSS to change the font, it worked however, when I used a class, it did not. 

The location and adjustment of the video and description were not what I had in mind and in my wireframe. For my next steps, I hope to be capable of easily adjusting the locations of my webpage components. 


### References:
* [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)
* [Class Github](https://github.com/MathuraMG/ConnectionsLab-NYUAD/tree/master/Week_01_HTML_CSS)

## HTML Code

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boat Maze Game</title>
    <link rel="stylesheet" href="CSS/style.css">
</head>
<body>
    <h1>Boat Maze Game</h1>
    
    <section>
        <ul>
            <li>Fatema Alhameli</li>
            <li>Introduction to Interactive Media</li>
            <li>Midterm Project</li>
            <li>Spring 2022</li>
        </ul>

    </section>

    <h2><a href="https://editor.p5js.org/FatemaAlhameli/full/RcoDaoymz" target=“_blank”> Click Here To Play!</a></h2>
   
    <table>

        <tr>
            <td><img src="./Images/New Maze.png" style="width:300px; height:300px">  </td>
            <td>&nbsp;</td>
            <td><p class="description">This maze game was developed in p5.js. It aims to keep a player intrigued by having a maze to solve with limited time. At the top of the game canvas is a short list of instructions that specifies to the player the story of the game and how to play it. The player in the game is a boat, and he/she is supposed to get to the island because a storm is coming in. To do so the player needs to solve the maze and get to the endpoint which is the island while being aware of the time limit. The time limit is displayed as a decreasing red line. The player can move the boat by using the arrow keys and can refresh the game by pressing the key “R”. The game begins with a start screen that tells the player to double click to start after they do so, the game and timer both start. If they fail to get to the island on time, they lose the game, and if they succeed, they win. </p><a href="https://github.com/FatemaAlhameli/Intro-to-IM-/blob/main/Midterm%20Project/Final%20Documentation%202.md" target=“_blank”>Read more about this game development process </a></td>
        </tr>
        
    </table>
    <br>
    <br>

    <video width="300" controls>
        <source src="Maze Game Video.mov" type="video/mp4">
        <source src="Maze Game Video.mov" type="video/ogg">
        Your browser does not support HTML video.
    </video>

    
    <section>
        <p>
            Fatema Alhameli - fha2017@nyu.edu
        </p>
    </section>

    
</body>
</html>
```

## CSS Code
```
li{
    color: rgb(5, 5, 104);
}

p{
    color: rgb(5, 5, 104);
    font-size: 25px;
}

body{
    background-color: rgb(127, 205, 255);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
```
