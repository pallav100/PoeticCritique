# PoeticCritque

Review your haiku or generate a haiku using conversational AI.

## Architecural and Design decisions

1. Backend - An MVC architecure served using node.js because of the ease of its setup allowing faster roll out of APIs. Typescript is used to enhance robustness and reduce data mismatch erros while moving data in the MVC pattern.
2. Database - SQLite, light weight + data to be stored is simple (text ,numbers, date) + usecase is relational
3. Frontend - Client side made using React.js. React is used to make code more modular, reusable and easy to extend.
4. Styling - Tailwind and material-UI icons are used to style the webpages. Provides classes that are responsive, eleminating need for writing custom css.Quick to learn.
5. Large Language Model - OpenAI powered GPT model (v3.5) is used to review or generate haiku. Choosen over other models like hugging face because of its easy to follow documentation and API integration is seemlees for Javascirpt environments. 


## Instructions to start the web-app 

### `Starting the backend server`

To run the server, navigate to server/ directory

1. Run ```npm install`` to install app dependencies.
2. Run ```npm start``` to start the server

The express server should be running on port 8000


### `Starting the frontend server`

To run the client, navigate to client/ directory

1. Run ```npm install`` to install app dependencies.
2. Run ```npm start``` to start the web server

The react client should be running on port 3000

Open up a browser and navigate to [http://localhost:3000](http://localhost:3000)

## Code Organization

1. `server/` contains server side code. This is an express.js +TS application.
    - server
        - apiRoutes
            - haikuRoutes [routes to handle any API calls related to haiku]
            - promptRoutes [routes to handle any API calls related to prompt historical user prompts ]
        - controllers
        - database 
            - contains database creation, connection, interaction (read & insert) and schema related logic
        - service
            - 3rd party integration with OpenAI apis
        - types
            - custom defined types
2. `client/` contains client side code. This is a React + TS application.
    - client
        - src
            - components
                - reusable components [contains button, sidebar, textbox, etc]
                - pages [contains webpages]
            - apiCalls 
                - haikuApis.ts [ contains fetch calls for generate and review haiku]
                - promptHistoryApis.ts [ cotnains fetch calls for getting history of prompts]
            - App.tsx [Root file]
            - APP.css [Root styling]