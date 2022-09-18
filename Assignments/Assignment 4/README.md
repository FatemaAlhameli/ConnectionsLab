## Assignment 4
[Link]()

As this assignment is part of project 1, I practiced the process of displaying data from a dataset on a webpage. My project one idea is to develop a well-being and positivity webpage. This webpage aims to have one of the easiest ways to improve one's mood by simply reading a positive message/quote or joke from a specific category. Depending on the user's needs, they will be able to choose a quote/message from the following categories: inspirational and motivational quotes or funny jokes. It will be designed to help give users a dose of positivity in their day. 

I began by looking for datasets that I would like to use. As my idea has several categories, it would be difficult to find a dataset that includes inspirational/motivational quotes, affirmations, and jokes together. Therefore, I had to look for them separately. For this assignment, I was only able to use ⅓ datasets, which were inspirational/motivational quotes.  

### Coding process: 

Similar to the class demo example, I used ```.fetch``` and ```.then``` with an API link to load the dataset in the code. Once I made sure I could view the dataset in the console tab, I began deciding how to structure my webpage. I wanted the quote and the author's name to appear in the center of the page. As the dataset consisted of numerous quotes, I couldn't load each quote separately. That would take forever. Therefore, I used a for loop to load the number of quotes I wanted. I made a p tag in HTML and gave it an id and used it in the for loop. In this case, I only wanted to load five quotes. In the for loop, I included a ```<table>``` that would help me organize the quote texts and author names once I loaded them. In CSS, I did the basic styling, which included font, font size, color, and text alignment. I also added a background color gradient using ```linear-gradient()```. 


### Challenges:

The main challenges I faced in this assignment were finding datasets and making sure they worked. I struggled with a dataset that gave me an error that it's not possible to fetch the API link because it's blocked. This is something I still need to work on and alternative datasets that I can use. 


### Next Steps:

* Add user interactions
* Incorporate p5
* Find two more datasets 
