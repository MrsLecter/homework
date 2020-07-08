const getRandomBoolean = () => Math.random() >= 0.5; // получить случайное true|false
const getRandomTimeout = () => Math.random() * 1000; // получить случайное время от 0 до 10 секунд

/*
Список статусов https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
нужно реазиловать 200 / 201 / 400/ 404 / 500 
*/
const arrOfTodos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      }
];

const parseParams = params => {
  if (!params) return "";

  return params.split("&").reduce((params, param) => {
    const [key, value] = param.split("=");

    params[key] = value;

    return params;
  }, {});
};

const parsePath = path => {
  const [pathname = "", paramsString = ""] = path.split("?");
  const params = parseParams(paramsString);

  return {
    pathname,
    params
  };
};

const returnIndex = path => {
    const pathname = path.substring(0, 6);
    const index =  path.split('/')[2];
    return {
        pathname,
        index
    };
};

const toFilter = arr => {
    let tcompleted = [];
    let tactive = [];
    let length = arr.length;
    let j = 0;
    let k = 0;
      for (let i = 0; i < length; i++) {
        if (arr[i].completed == false) {
            tactive[j] = arr[i];
            j++;
        }else if (arr[i].completed == true) {
            tcompleted[k] = arr[i];
            k++;
        }
      }
      return {
          tactive,
          tcompleted
      };
};

class Request {
  constructor() {
    this.todos = arrOfTodos;
  }

  get(path, { onSuccess = () => {}, onError = () => {} }) {
    const timeout = getRandomTimeout();
    const isSuccess = getRandomBoolean();
    const { pathname } = parsePath(path);
    const { params } = parsePath(path);
    let filtered = null;

    if(params.length !== 0){
        if(params.filter === "active"){
           const {tactive} = toFilter(this.todos);
           filtered = tactive;
        }else if(params.filter === "complete"){
            const {tcompleted} = toFilter(this.todos);
            filtered = tcompleted;
        }else if(params.filter === "all"){
            filtered = this.todos;
        }
    }
    
    setTimeout(() => {
      if (pathname === "/todos" && params.length === 0) {
        if (isSuccess) {
          onSuccess({
            status: 200,
            data: this.todos,
            message: "OK",
            timeout
          });
        } else {
          onError({
            status: 404,
            message: "Not Found",
            timeout
          });
        }
      }
      else if(pathname === "/todos" && params.length !== 0){
        if (isSuccess) {
            onSuccess({
              status: 200,
              data: filtered,
              message: "OK",
              timeout
            });
          } else {
            onError({
              status: 404,
              message: "Not Found",
              timeout
            });
          } 
      }
      
    }, timeout);
  }

  post(path, {body =() => {}, onSuccess = () => {}, onError = () => {} }) {
    const timeout = getRandomTimeout();
    const isSuccess = getRandomBoolean();
    const { pathname } = parsePath(path);

    this.todos.push(body);
    
    setTimeout(() => {
        if (pathname === "/todos"){
          if (isSuccess) {
            onSuccess({
              status: 201,
              data: this.todos,
              message: "Created",
              timeout
            });
          } else {
            onError({
              status: 400,
              message: "Bad Request",
              timeout
            });
          }
        }

  }, timeout);
 }

 put(path, {body =() => {}, onSuccess = () => {}, onError = () => {} }){
    const timeout = getRandomTimeout();
    const isSuccess = getRandomBoolean();
    const {pathname} = returnIndex(path);
    const {index} = returnIndex(path);
    let obj = this.todos[index];
    let aobj = Object.fromEntries(Object.entries(obj));
    let ebody = Object.fromEntries(Object.entries(body));
    this.todos[index] = Object.assign(aobj, ebody);

    setTimeout(() => {
        if (pathname === "/todos") {
          if (isSuccess) {
            onSuccess({
              status: 201,
              data: this.todos,
              message: "Created",
              timeout
            });
          } else {
            onError({
              status: 400,
              message: "Bad Request",
              timeout
            });
          }
        }
    }, timeout);
    
 }

 delete(path, {onSuccess = () => {}, onError = () => {} }){
    const timeout = getRandomTimeout();
    const isSuccess = getRandomBoolean();
    const {pathname} = returnIndex(path);
    const {index} = returnIndex(path);
    this.todos.splice(index, 1);

    setTimeout(() => {
        if (pathname === "/todos") {
          if (isSuccess) {
            onSuccess({
              status: 200,
              data: this.todos,
              message: "OK",
              timeout
            });
          } else {
            onError({
              status: 400,
              message: "Bad Request",
              timeout
            });
          }
        }
    }, timeout);
    
 }


}

const request = new Request();

// запросить todos
// request.get("/todos", {
//   onSuccess(response) {
//     console.log(response); // массив todos
//   },
//   onError(error) {
//     console.log(error); // не верный url, например todoc
//   }
// });
//----------------------------------------------------------------------------------------------------
// фильтрованные todos по параметру "all"
// request.get("/todos?filter=all", {
//   onSuccess: response => {
//     console.log(response); // массив todos
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc
//   }
// });

// фильтрованные todos по параметру "complete"
// request.get("/todos?filter=complete", {
//   onSuccess: response => {
//     console.log(response); // массив todos
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc
//   }
// });

// фильтрованные todos по параметру "active"
request.get("/todos?filter=active", {
  onSuccess: response => {
    console.log(response); // массив todos
  },
  onError: error => {
    console.log(error); // не верный url, например todoc
  }
});
//-----------------------------------------------------------------------------------------------
// // Создание todo
// request.post("/todos", {
//   body: {
//     title: "New todo",
//     description: "Some text"
//   },
//   onSuccess: response => {
//     console.log(response); // todo успешно создан
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc
//   }
// });
//-------------------------------------------------------------------------------------------------
// //обновление todo
// request.put("/todos/1", {
//   body: {
//     title: "New todo"
//     // description: "Some text" // можно обновить лбое поле или поля или нет записи под index = 1
//   },
//   onSuccess: response => {
//     console.log(response); // todo успешно обновлен
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc
//   }
// });
//--------------------------------------------------------------------------------------------------
// //удаление todo
// request.delete("/todos/1", {
//   onSuccess: response => {
//     console.log(response); // todo успешно удален
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc или нет записи под index = 1
//   }
// });
