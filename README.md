# AngularWebAPI

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

to run the Angular front-end app: 
Open cmd, then cd to project: \CORNERSTONE ANGULAR .NET DEVELOPER INTERVIEW PROJECT\AngularWebAPI, and run the command: ng serve.

http://localhost:4200/ will be the Angular front-end to interact with.

Next, open folder: \CORNERSTONE ANGULAR .NET DEVELOPER INTERVIEW PROJECT\CoreWebAPI
Open the CoreWebAPI.sln in the latest Visual Studio, or as recent as possible.
Click run.

This will open http://localhost:7271/swagger/index.html in another browser tab. You can use Swagger optionally, to stimulate each HTTP Web Method!

With both projects running, now go back to the http://localhost:4200/ tab, and you should see the page loaded without error in the console, or browser.

Create a new User POST:
From here you can, enter a user ID and user name, then click the add a new User button, then simply refresh the page. We use a local MongoDB, which is awesome how simple it is to use! This is the POST.

See app example code test.png in the CORNERSTONE ANGULAR .NET DEVELOPER INTERVIEW PROJECT folder for a demo example!

For proof of database queries and inserts, I used SQL to match the syntax, we are using MongoDB for this app note. See images for inserts success. With more time, link up all of these tables to MongoDB, for now we use User ID and User Name.

Update an existing User PUT:
You can, enter a user ID and user name, then click the update a User button, and then refresh the page to see that it updated the Users name. This is the PUT.

Find a User by ID GET:
Then, see bottom of page for the Find a User by ID GET example. You can enter an existing User ID, to look up that User.

Finally, the entire list at the top of the page is the Get all Users demo, that list loads when the page refreshes.

One paragraph write-up describing the steps you took, what you would improve, and a list of the tools you used during development:
Hello, here is my one paragraph write-up to describe the steps that I have taken, what I would improve, and the list of tools that I used while developing this application. First, I will break this down into two projects, and a database. For the front-end, I used Angular RxJS and have created an API that does not even have to use observables! This web API is written in TypeScript, as the RxJS base language. The front-end will be a page to display the list of users. This list loads all by default, near the top of the HTML web page, so that you can see the entire list of users, to choose which to modify. Having more time, I would improve and probably add a search box, rather than displaying all users, for their privacy, and to allow you to choose which users that you'd like to see, or add a see all users button. This application front-end is a SPA, single page application, to keep the User Experience simple and make sense to the eye of the Customer AKA Users of this application. I have also added a form to create / edit a single user on this same page, having more time, would allow you to edit any User via some fancy HTML layout, and add the other fields, such as email, and birthdate, and last name, rather than the demo ID and Name. Creating a new user, would also allow more fields also, with more time, to add more User details. Then ensure that the User :id is a PK Primary Key that indexes, uniquely, so there can be no duplicate ID. This demo still uses all HTTP web method calls, functioning all that an API is capable of. Finally, the second project is a Web API created with Visual Studio in .NET CORE. This web API is the middle layer, and uses HTTP Web Methods, such as GET, GET :id, PUT (Update existing User), and POST (Create new User). This Web API layer is what connects to the database, to save the User data! Our front-end Angular web page, simply calls this Web API middle layer, using HTTP Request, and receives an HTTP Response, using await async. This is so that the front-end will get the data, without skipping ahead, before executing the next line of code. With more time, we can decide architecturally, if we want to grow this application and keep the Web API, or since it's a SPA, we can simply talk to the database via Angular, and keep it simplified to Angular only, reducing it to a complete SPA. The database is MongoDB, and it's super simple and light, called a document database using NOSQL. MongoDB was installed via the driver using NPM. I also ran these commands in SQL, see the other screenshots in folder: \CORNERSTONE ANGULAR .NET DEVELOPER INTERVIEW PROJECT\CoreWebAPI.  With more time, hook up all of these SQL tables to models, within the Web API project, and Entity, or code-first, everything can become auto-populated, and auto saved, more dynamically, and more deployable. Would use Azure and Octopus for DevOps deployments, and to remove any secrets from GitHub, not that we currently use any app config data. The idea is to give the Customer(s) the smoothest User Experience, that makes sense to the eye, without the need for complex documentation. It should flow with desired use of this tool to any level of tech User, ideally.

Tools used:
Visual Studio 2022, .NET, CORE, VSCode, NPM, MongoDB, Node, RxJS, TypeScript, jQuery, JSON, GitHub, Git, code cleanup tools such as 'Prettier' for VSCode, and the built in Code Cleanup Tool Profiler for Visual Studio, SQL for these insert commands, Windows OS, Firefox (has the best Network tab for front-end debugging), HTML, and CSS.

This has been a really great demo and exercise, I had so much fun! I hope that you will have fun also!
Let me know if you have any questions, or when you'd like to further discuss the position. My time is yours!

Thanks for now.
Have a great day!
Best Regards,
Christopher Witalis Peterson



Built in VSCode Generated Functionality:
ng serve


Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
