const url = require("url");
const http = require("http");
const { readTodos, createTodo, updateTodo, deleteTodo } = require("./todos");

// console log
const logger = (request, response) => {
  const { pathname, query } = url.parse(request.url, true);

  console.table([
    {
      METHOD: request.method,
      PATHNAME: pathname,
      QUERY: JSON.stringify(query),
    },
  ]);
};

// todos api
const todos = (request, response) => {
  const { pathname, query } = url.parse(request.url, true);
  let urlParsed = url.parse(request.url);
  console.log(pathname.substring(0, 7));
  if (pathname === "/todos") {
    switch (request.method) {
      case "GET":
         response.setHeader("Content-Type", "application/json");
        if(!urlParsed.query){
          readTodos((todos) => {
            response.end(JSON.stringify(todos));
          });
          break;
        }else if(urlParsed.query==="completed=false"){
          readTodos((todos) => {
            let filteredFalse = todos.filter(item => item.completed === false);
            response.statusCode = 200;
            response.statusMessage = 'OK';
            response.end(JSON.stringify(filteredFalse));
          });
          break;
        }else if(urlParsed.query==="completed=true"){
          readTodos((todos) => {
            let filtered = todos.filter(item => item.completed === true);
            response.statusCode = 200;
            response.statusMessage = 'OK';
            response.end(JSON.stringify(filtered));
          });
          break;
        }
        
      case "POST":
        let rawData = "";
        request.on("data", (chunk) => (rawData += chunk));
        request.on("end", () => {
          try {
            const { title } = JSON.parse(rawData);

            createTodo(title);

            response.writeHead(201, { "Content-Type": "text/plain" });
            response.end("Задача создана");
          } catch (error) {
            console.log(error);
          }
        });
        break;
      default:
        break;
    }
  }
  else if (pathname.substring(0, 7) === "/todos/") {
    let queryId = parseInt(pathname.substring(7));
    switch (request.method) {
      case "DELETE":
           deleteTodo(queryId);
            response.statusCode = 204;
            response.statusMessage = 'No Content';
            response.writeHead(204, { "Content-Type": "text/plain" });
            response.end("Задача удалена");
        break;
      case "PUT":
          let rawData = "";
          request.on("data", (chunk) => (rawData += chunk));
          request.on("end", () => {
           const data = JSON.parse(rawData);
           data.id = queryId;
           updateTodo(queryId, data);
            response.statusCode = 204;
            response.statusMessage = 'No Content';
            response.writeHead(204, { "Content-Type": "text/plain" });
            response.end("Задача обновлена");
        });
        break;
      default:
        break;
    }
  }
};

// create server
const server = http.createServer((request, response) => {
  logger(request, response);
  todos(request, response);
});

// start listen port 3009
server.listen(3009);
