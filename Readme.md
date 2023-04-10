## How to run backend on localhost
1. backend > configs > db.js. in side db.js add you mongoDB atlas Database like.=> <const connection = mongoose.connect("MONGO_URL")/>;  
2. Run "npm i" inside backend command directoy 
3. then run "npm start" to run server on <localhost:8080/>

## Depolyed link
<a src="https://adobe-server-w5qn.onrender.com/">Link :-</a> https://adobe-server-w5qn.onrender.com/

1. Or you can use Deployed link and replace this like with base URL in Frontend

## How to run Frontend on localhost.
1. if you are using deployed link, so you need to change base url to deployed link.
   to change link go to client > src > Redux > App > AppAction.js. inside AppAction.js file change URL with deployed like or Localhost link to connect with server.
2. After replace URL with your link you need to run 2 command in terminal and client directory.
3. npm i.
4. npm start.

