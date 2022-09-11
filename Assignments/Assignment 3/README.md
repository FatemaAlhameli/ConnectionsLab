# Grocery List Webpage

#### [A place that fits your needs!](https://fatemaalhameli.github.io/ConnectionsLab/Assignments/Assignment%203/index.html)

For this week’s assignment, we were asked to create a meaningful webpage that incorporates at least two event-driven user interactions. Brainstorming ideas for this webpage was not as easy as I thought it would be. However, while I was having a discussion with my sibling about what we needed from the grocery store, I figured that I could make a webpage that allows the user to jot down their list of groceries. Creating groceries lists ultimately allows one to not forget to purchase certain groceries. This webpage includes a check-off box option where the user can cross out the item they added to their shopping cart. 

#### Wireframe:

The layout of the webpage was pretty straightforward. I divided it into three sections: the heading, the kitchen list, and the house list. This way, it would be more organized for the user. 

  <img src= "https://github.com/FatemaAlhameli/ConnectionsLab/blob/main/Media/Assignments%20Media/Wireframe%20assignment%203.png" width = "420" height = "300">

#### Coding Process: 
For the coding aspect, I first began with HTML and CSS. I did the basic section division in the ```<body>```, which included the headings, ```<input type = “text”>```, and an unordered list tag. This will allow for a space to write the items and create a list. In the CSS file, I did the basic styling that included font and color. I used flex to position the containers that had the items lists.  In Javascript, I created two variables that would get access to both lists; kitchen and house. I created an event that would allow the user to type in a different item every time. In this function, I created a list that I then added to my unordered list using id and ```appendChild```. I repeated the same process for the next list.  To add the checkbox, I used ```<input type= checkbox>``` in ```inner.HTML```. 



#### Challenges and Next Steps:
The main challenge I faced was getting the hang of using Javascript, HTML, and CSS together while linking to each other. It is definitely something new for me, and with time, I will get used to it. Ultimately, this is just understanding the basics. I feel like there is so much more I would love to explore and add in terms of styling and interactivity. For my next steps, I would like to add a few icons to each list section to make the webpage more appealing. I attempted to do that, but I had difficulties locating on the place I wanted it to be. Another issue I also came across on the webpage page was that when I clicked on the page, a random empty checkbox would appear in the list. It didn't always happen, but I still couldn't find where the issue was in the code. Another issue I faced was when I added the checkbox. A bullet point would appear next to the checkbox every time I added an item. After looking through MDN, I discovered that it could be solved through CSS. I used ```list-style-type: none``` to remove any styling elements (bullet points) in the lists. 
