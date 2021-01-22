# sc-nest-api

## Nest.js

Nest is a opinionated node.js framework used to build server side applications. Based on Express.js NestJS takes the advantage of both typescript and javascript. 

## Nest properties

* Extensibility: Flexibility to use other libraries
* Versatility: Adaptive ecosystem that is fully-fledged for all types of server-side applications.
* Progressiveness: Brings JavaScript features and design patterns into the Node community.

## Reasons for Nest.js preferable over other NodeJS frameworks

* Compatibility with TypeScript
* Support Monorepo
* Made for monoliths and microservices
* DevOps support ready
* Powerful CLI
* Built-in support for microservices & transport layers
* Dependency injection container
* Easy database interaction
* Building GraphQL interfaces easily
* Framework adaptive nature
* Domain-driven development
* Angular based folder structure
* Built-in Exception Filter
* Use of third-party modules
* Built-in inversion of control
## Install Nest CLI globally
```
npm i -g @nestjs/cli
```
The above command used to install the Nest CLI and set up a new project 

## Create New Nest project

1. From in your git projects folder, run (use your initials):
```
nest new name-nest-api
```
2. cd into your new project directory
```
npm run start
```
3. View at http://localhost:3000/ (Links to an external site.)

### FAQ's 
#### What does npm install do?
npm install downloads a package and it's dependencies
#### What file describes the start script? 
package.json
#### What is the actual command that npm start runs? 
```
npm start run
```
#### Are there other scripts provided?

#### What language are .ts files? How close are they to .js files? What is special about TypeScript?  Why do so many programmers like TS over JS? (Hint: When do more errors get identified?)
* .ts stands for typescript files. 
* TypesScript is known as Object oriented programming language whereas JavaScript is a scripting language.
* TS identifies more errors than JS thats why programmers like TS. Because as the project grows the program also grows so TS helps to identify errors.

## Customize the app

* Open the folder in VS Code. Explore the code.
* Figure out how to change the message to read 'Hello World from ___ !' (display your name) - 
* Test it. 
* Prepare for Heroku: package.json needs engines / start script, app needs a flexible PORT - In package.json, add (type, don't copy) "engines": { "node": "15.x" } - it require for heroku to have latest version of node. Give flexible PORT as process.env.PORT || 3000

## Generate a new Resource
* From in your project directory, run (note - I use singular rather than their example plural - do as you please and adjust accordingly):
```
nest generate resource quest  
```
* Select REST (hit return) and Y (generate entry pts). 
* Explore the project structure. How does our new resource get added to the app? 
For each new resource, there's a module with a controller that handles requests by calling a service. (We've seen these before.) 
* There's also an interface - and a dto - a data transfer object. When you call a POST (or PUT) command, you need to provide a package with your request.  That's wrapped up nicely in a read-only 'data transfer object' - one for each unique package needed. 

```
npm i --save @nestjs/mapped-types
```
## Finish and Test

* Complete the quest API.
* Test it: npm run test

## Create repo & initial push

* In your GitHub account, create a repo with the exact same name as your project folder. Add a description. Keep it empty.
* In your laptop root repo folder (customize): 
* git remote add origin https://github.com/sudheera96/sc-nest-api.git
* Configure Heroku to use your GitHub and auto publish on push.
* git add .
* git commit -m "Initial commit"
* git push origin main*

*The default branch used to be "master" - I think it is now "main". Please use the default branch on your system - use TortoiseGit / Show Log. Share your screen during class if you run into issues.  

## Publish to Heroku

Publish your app to Heroku. If running out of free apps, delete earlier ones. 
* Login to Heroku (use same email as you use for GitHub)
* Create a new app (I use the same name as my repo if the name not taken already, orelse use other name)
* Deploy / Deployment method = GitHub (and connect to your repo)
* Deploy / Enable Automatic Deploys.
* Settings / Get the app URL

## Important points
Since we want to start with scripts.start:prod, we'll create our own Procfile rather than use the default. Create a new Profile (note the capitalization - as developers, we must be pedantic!) with this inside
```
web: npm run start:prod
```
## Links

* [Source link](https://github.com/sudheera96/sc-nest-api)
* [App link](https://sc-nest-api.herokuapp.com/)
* [App link - about](https://sc-nest-api.herokuapp.com/about)

## Reference
* [First steps of nest](https://docs.nestjs.com/first-steps)
* [MVC](https://docs.nestjs.com/techniques/mvc#model-view-controller)
* [NestJs over other frameworks](https://medium.com/habilelabs/why-choose-nest-js-over-other-node-frameworks-68a13fa1e2c8)
