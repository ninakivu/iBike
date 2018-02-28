# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) WDI Project 4: MERN Stack - 'iBike'


**[https://iBike.herokuapp.com/](https://iBike.herokuapp.com/)**

![Landing Page](readme/images/screenshot1.jpg)

## SUMMARY

My final project at General Assembly was to create a full MERN stack application with an open scope to create a RESTful site, achievable within a week. The site ended up being a social platform which encourages people to bike to work instead of driving a car. I included the Google Maps API to give a visual representation of the bike route between starting and ending points.


### Programming and Technology Library:

* Mongo, Express, ReactJS, Node.js
* JSX
* JavaScript
* HTML5
* CSS3
* Google Maps API
* Bootstrap
* webpack

## PLANNING

### Initial Idea

During the initial planning phase, I sketched out a fews ideas on paper and investigated the options for getting desired information from various APIs. I knew I wanted to create something linked to health, wellbeing and environment and I thought of encouraging people to go by bike. By seeing how much gas/money their friends, coworkers and family save, they would be encouraged to bike more and move up the leaderboard.

In my initial concept, I had originally planned for the app to track your GPS location and automatically draw a route of where you biked. The it would use the distance to calculate the impact on enviroment and your health.
![Initial Sketch](readme/images/initial_sketch1.jpg)
> *Figure 1 - Concept sketch from initial ideas mapping*


### Project Planning

Throughout the project, I organised sprints by planning tasks on a  Trello board. All features were listed on cards and progressed through the 'To do', 'Doing Today' and 'Done' chain. Following Agile project management principles, I assigned a priority rating to each feature. Everything either had a 'Must Have', 'Should Have' or 'Could Have' rating allowing me prioritise what to work on and what to leave for later.

![Trello board](readme/images/Trello1.jpg)

> *Figure 2 - Trello board used to plan and monitor the project throughout the week*


### Wireframe and prototyping

After finalising the initial concept, I wire-framed the designs to help visualise the user experience journey and come up with the basic layouts for each page. I used Adobe Xd to both wireframe and prototype the concept, meaning that I had working button links. This made it easier to decide on what information was needed on each page.

My intention was to create a fully mobile responsive app so that users would be able to both plan out and view their run data when being outside. Adobe Xd allows users to open up the wireframe designs on your mobile which aided in the design process.

![Wireframes](Readme_Files/images/AdobeXD_screenshot_05_12_17.jpg)
> *Figure 3 - Wire-framing and prototyping on Adobe Xd*



## THE FINAL APP

The look and feel of the final app was intended to use a simple colour palette. Many of the pages use large images of people running to maintain the sporty theme throughout. i used Bootstrap to create a grid layout and tried to keep the styling simple on each page, with icons being added from the font-awesome site to add finer details

![Final App](Readme_Files/images/screenshot_combined.jpg)
> *Figure 5 - Screenshots from the final product*

### Lessons Learned

As with any project, there were many issues I stumbled across and there were also many lessons to be learned as a take away including:

1. Try to understand what pages a user would need to see when a user initially logs in. At the beginning of the process, it took a while to completely get my head around how a user would interact with my site, i.e. first having a landing page, then moving onto the users show page.
2. A lot of functionality is much more suitable to be placed in the back end. Before starting, I was not fully aware of the process of combining the front and back end nor being able to add data validation. However after including these features, it makes much more sense to do so.



## FEATURES BACKLOG

Given a week-long timeframe, the scope of the project needed to be suitable and some planned features could not be included. In the future, I'll work on adding the following features to my site:

1. Make the entire site more mobile responsive.
2. Instead of Google Maps iframe, use the API which would enable me to get the distance.
3. Integrate waypoints selector feature on Google Maps to make the app more useable before recording a trip.
4. Include the ability to access walking to work aswell.
5. Add comments and ratings.
6. Use the GPS tracker to record a trip.
7. Leaderboard of most gas saved.