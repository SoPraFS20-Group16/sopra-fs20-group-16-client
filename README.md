# The Settlers of Toucan

#### SoPra FS20 Group 16 - Frontend

## Introduction

Welcome! With "The Settlers of Toucan" we aim to create a fun strategy boardgame for everyone. This online
collaborative game allows you to play with friends, strangers and even bots. It is designed for up to four 
people in one game.

Collect resources and use them to build roads, settlements and cities. Expand your empire, use development 
cards and trading options in order to conquer the island of Toucan. Since every move affects every player, it will
 surely keep you on your toes. It gives you some time to establish your strategies - but watch out for the thief!

Based on simple concepts, this game does not fail to provide a diverting experience.

## Technolgies

The frontend was written with ReactJS version 16.12. The respective documentation can be found on the official website
[ReactJS Documentation](https://reactjs.org/docs/getting-started.html).
We also used various Javascript packages, which were handled by the Node Package Manager (npm). Again, how to use install
npm and how to use the various packages that are available, visit the [npm documentation](https://docs.npmjs.com/). 
We also used [Mapbox](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/) as external API, to visualize 
the players' locations.

## High-level components

- [Dashboard](src/components/dashboard/Dashboard.js) This is where all the players meet and have the opportunity to create
a game lobby. The lobbies will be directly visible for all the other players that are hanging out on the dashboard and they
can join an existing game as long as there is a free spot in a lobby. Also, the players have the option to create a bot-enabled
lobby, with which they do not even have to wait for others and can directly start the fun.

- [Home](src/components/home/Home.js) This is the place where you can hang out with the other participants. What stands out
here is the interactive map provided by [Mapbox](https://www.mapbox.com/). On this map, every registered user is shown, as long
as he accepted the location-sharing option in the registration process. After deeply analysing the map, the lobby creator has
the option to actually start the game when she/he wants to.

- [Board](src/components/board) The heart of the frontend is the board. It is the key component, on which the players actually
play the game and make their turns on. It consists of 19 tiles in the shape of a hexagon. Also, the multiple tiles hold 
a number from 2-12 and also represent one of the resources that are necessary to progress in the game. The edges and vertices
are designed as building areas for the players. On the vertices the players can build settlements or cities and on the edges
the players can build roads.

- [Game](src/components/game) The game holds all the logic and actions for the players. The game component allows the players
to interact with the board and also to get the state of the game by visual means. It sends the turns of the players to the backend
and also shares the respective response to that turn on the board. The game component also includes necessary components such as the
action feed which provides information regarding the turns of players, the action box to choose the turns from and also a dice functionality
which is responsible for the distribution of resources.


## Launch & Deployment

To contribute to this project you can clone or fork this repository. If you want to add your changes or improvements
you can create a pull request. For more information visit the [Github Help Page](https://help.github.com/en/github).
If you choose to make a pull request, make sure the github actions task **Test Project** passes.

If your pull request is accepted, the project is automatically deployed to heroku. If you want to deploy your own
version check out this guide on 
[how to deploy spring boot applications to heroku](https://devcenter.heroku.com/articles/deploying-spring-boot-apps-to-heroku).

## Prerequisites and Installation

For your local development environment you'll need Node.js >= 8.10. You can download it [here](https://nodejs.org). All other dependencies including React get installed with:

### `npm install`

This has to be done before starting the application for the first time (only once).

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console (use Google Chrome!).

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Roadmap

The game provides the possibility for a wide range of possible features that could be added.
In the following we will explore a few by example. The first two might serve as inspiration for the immediate future,
whereas the last one should convey our vision about the future of Toucan.

### Visual Adjustments

    
### Chat with players



## Authors and acknowledgement

We firstly want to thank our Teaching Assistant Moritz Eck for his continued and unwavering support for the duration
of this project.
For the SoPra FS20 we split the Group into a Frontend and Backend team. This required an early on specification of the
API endpoints. We thank everyone from the Backend team for their continued input in the API development process.


The SoPra FS20 Group 16 Frontend Team


## License

Distributed under the Apache 2.0 License. See LICENSE for more information.
