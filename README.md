# StarwarsHub
Is a simple Angular project using Firebase. Start by connecting your firebase:
go to src=> Environments => environment.ts and enter your api etc. on the line 8. 

To set up your database use the following structure:

* *director: "J. J. Abrams"*
* *episode_id:7*
* *image: "assets\7.jpeg" //Put your images in assetts*
* *opening_crawl: "Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the support of the\r\nREPUBLIC, General Leia Organa\r\nleads a brave RESISTANCE.\r\nShe is desperate to find her\r\nbrother Luke and gain his\r\nhelp in restoring peace and\r\njustice to the galaxy.\r\n \r\nLeia has sent her most daring\r\npilot on a secret mission\r\nto Jakku, where an old ally\r\nhas discovered a clue to\r\nLuke's whereabouts...."*
* *release_date: December 11, 2015 at 12:00:00 AM UTC+1*
* *title: "The Force Awakens"*

Don't forget to run `nmp install` to download all libraries.

Set up connection to your firebase in environment.ts inside 
`firebaseConfig:{
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
    }`

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Screenshots

![starwarhub_main](https://user-images.githubusercontent.com/36896406/50055773-7e09de00-0153-11e9-9c61-98670dc228b6.png)

Main page presents the list of articles.

Edit Posts page allows to add or delete articles:

![adminboard](https://user-images.githubusercontent.com/36896406/50055771-7e09de00-0153-11e9-9d11-154ef8a0207c.png)

Add article dialogue opens at the bottom of the page. //To DO include fields verification and image loading. For now this form is disabled unless all fields are entered.

![addnew](https://user-images.githubusercontent.com/36896406/50055770-7e09de00-0153-11e9-9511-ca4eb6c7130a.png)

![addarticle](https://user-images.githubusercontent.com/36896406/50055768-7d714780-0153-11e9-9a72-cf637b04e645.png)

Toast messages confirms successfull deletion or insertion of an article.

![toastmessage](https://user-images.githubusercontent.com/36896406/50055774-7e09de00-0153-11e9-92d7-206f789e2b33.png)

A confirmation dialogue box is used for Delete command.

![deletefilm](https://user-images.githubusercontent.com/36896406/50055772-7e09de00-0153-11e9-9dad-04a57515fc26.png)
