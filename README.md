# Note Taker

## My Task

I was challenged is to create an application called Note Taker, an app that can be used to write and save notes. I built this applicatio using an Express.js backend, which would use 'get' and 'post' routes to save and retreve data from a JSON file. 
This application was made possible by the provided front end code which, in conjunction with the server.js file I developed, was instrumental in deploying the webpage to Heroku, where it can be freely used. 

## Given: User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Given: Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Usage

To use this application, you can simply launch it from the deployed [Heroku Page](https://the-grand-note-taker.herokuapp.com/). There, you can simply click the button on the main page to enter the note taker portion. Once there you can input any title and body, then click the save icon to push the data to the json file that is used to populate the note tabs on the left side of the application. Once done you can freely revisit those notes by simply clicking on them. 

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./public/assets/NoteTaker.gif)


## Future Developmet
At the moment, there are several trashcan icons included on the left side portion of the application. Idealy, these should be used to delete the note. However, gicen my current abbilities, this stresh goal is to be pushed for future development. 


## Review

You are required to submit BOTH of the following for review:

* Deployed appliction: https://the-grand-note-taker.herokuapp.com/ 

* GitHub Repo: https://github.com/jaime-gg/note-taker 

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
