# PoeticCritque

Review your haiku or generate a haiku using conversational AI.
<img width="700" alt="Screenshot 2024-01-22 at 10 44 29 PM" src="https://github.com/pallav100/PoeticCritique/assets/25646444/372a355b-e787-4eee-a6d3-8deacf18789a">


## Architectural and Design decisions

1. __Backend__ - An MVC architecture served using node.js because of the ease of its setup allowing faster rollout of APIs. Typescript is used to enhance the robustness and reduce data mismatch errors while moving data in the MVC pattern.
2. __Database__ - SQLite, lightweight + data to be stored is simple (text, numbers, date) + use case is relational
3. __Frontend__ - Client side made using React.js. React is used to make code more modular, reusable, and easy to extend.
4. __Styling__ - Tailwind and material-UI icons are used to style the webpages. Provides classes that are responsive, eliminating the need for writing custom CSS.Quick to learn.
5. __Large Language Model__ - OpenAI powered GPT model (v3.5) is used to review or generate haiku. It is chosen over other models like hugging face because of its easy-to-follow documentation and API integration is seamlees for Javascript environments. 


## Instructions to start the web-app 

### How to start the backend server (use Node v18 +)

To run the server, navigate to the server/ directory

1. Run ```npm install``` to install app dependencies.
2. Input your Open AI API key into .env
3. Run ```npm start``` to start the server

The express server should be running on port 8000


### How to start the frontend server

To run the client, navigate to client/ directory

1. Run ```npm install``` to install app dependencies.
2. Run ```npm start``` to start the web server

The react client should be running on port 3000

Open up a browser and navigate to [http://localhost:3000](http://localhost:3000)

## Code Organization

1. `server/` contains server side code. This is an express.js +TS application.
    - server
        - `apiRoutes`
            - haikuRoutes [routes to handle any API calls related to haiku]
            - promptRoutes [routes to handle any API calls related to prompt historical user prompts ]
        - `controllers`
        - `database`
            - contains database creation, connection, interaction (read & insert) and schema-related logic
        - `service`
            - 3rd party integration with OpenAI APIs
        - `types`
            - Custom-defined types
2. `client/` contains client-side code. This is a React + TS application.
    - client
        - `src`
            - `components`
                - reusable components [contains button, sidebar, textbox, etc]
                - pages [contains webpages]
            - `apiCalls` 
                - haikuApis.ts [ contains fetch calls for generating and reviewing haiku]
                - promptHistoryApis.ts [ contains fetch calls for getting the history of prompts]
            - App.tsx [Root file]
            - APP.css [Root styling]

## Coding pattern/conventions

- A separate service (set of functions) to interact with LLM. In the future, we can easily update the services to switch to another model. Keeping controllers safe and unchanged.

- Readability and maintainability of code are given more priority over concise and performant code.
  - Use of consistent variable naming pattern
  - organizing code into separate folders as per its responsibility - types, styles, APIs, database, controllers, etc
