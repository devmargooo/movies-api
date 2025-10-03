# Movies Server (Node.js + Express)

## 1.Запуск сервера на локальной машине

```
git clone https://github.com/devmargooo/movies-api.git
cd movies-api
npm i
npm start
```

Сервер запустится на `http://localhost:3030/`

## 2. Использование API

Содержит один урл эндпойнт GET /movies

Возможно два кейса использования:

### Без квери параметра.

Запрос `http://localhost:3030/movies`. Вернет список из 100 фильмов. Каждый фильм является объектом с id: number и title: string (пример смотри ниже)

### С квери параметром search.

Запрос `http://localhost:3030/movies?search={search}`

Пример запроса: `http://localhost:3030/movies?search=se`
Ответ:

```
[
  {
    "id": 25,
    "title": "Seven Samurai"
  },
  {
    "id": 31,
    "title": "Se7en"
  },
  {
    "id": 43,
    "title": "Apocalypse Now"
  },
  {
    "id": 51,
    "title": "2001: A Space Odyssey"
  }
]
```

Если в названии фильма есть пробел, то необходимо отправить в поисковой строке закодированный пробел.
Чтобы закодировать урл или часть урла с пробелом, необходимо использовать нативные javascript функции encodeURI или encodeURIComponent.
