
## Week 6 Assignment 

For this assignment, I created a webpage that displays my top 5 comedy TV shows. I created my own JSON that I then turned into an API. Since we did this in class, this part was simple to create. In the API, I included the number of seasons, the release year, and an image of all the shows. 

Intentions for this assignment are:
1. Have the tv shows in a dropdown menu 
2. Use a query to display the information of each tv show when pressed on the menu

### Index.js

Using index.js was definitely confusing, as it took me a while to understand its functionality. However, following the example from class helped me understand its fundamentals. I used this week's assignment to try and grasp the logic and technicality of it. For my assignment, I followed the same steps as in class. I installed the node modules and added express to the program. I created an object (JSON) named shows that had my top 5 comedy tv show. I used ```app.listen``` to tell the server to listen to the browser on port 3000. I used ```app.get``` to send the data through the server and to tell the server what to do when a client is trying to get information from the ‘/tvshows’ route.

```
app.get("/tvshows", (req, res) => {
   res.send(shows);
})
```

Lastly, I created a public folder with HTML, CSS, and JS files. Then, I added this line of code to go live to serve up the webpage: ```app.use("/", express.static("public"));``` 

### App.js, HTML, & CSS

For the HTML code, I simply added a dropdown menu with the shows list and gave them id’s that I will then use in my app.js. I added values to the list in the dropdown menu. The values I gave each element in the list are the exact same as the ones from the json object. 

In app.js, I fetched the API that I created in index.js and made sure the data showed in the console. I then created variables for the droplist and accessed it through id’s. I added an event listener “change” for the dropdown interaction. I then used ```.innerHTML``` to display the data. 

The CSS code was pretty straightforward, I used text-align and margin auto to have everything centered. I also used CSS to adjust the image sizes. 


### Thoughts 

This assignment was definitely one of the most challenging assignments. Using terminal, alongside a server-side and client-side code, was very new to me. I believe I will get the hang of it in time. However, it allowed me to get out of my comfort zone and explore new things. For my next steps, I would like to make sure the words Seasons and Year Released not be visible when first refreshing the page. 

