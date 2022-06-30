# TP2 - Trabajo práctico - Sistema de stock

**Taller de Programación 2**.
Trabajo práctico
Alumno: Patricio Córdoba
Profesor:  Pablo Fernandez Hinojosa

# Este proyecto utiliza:

- **NodeJs** - https://nodejs.org/
- **express** - https://expressjs.com/
- **express-validator** - https://express-validator.github.io/
- **bcrypt** - https://github.com/kelektiv/node.bcrypt.js
- **cookie-parser** - https://github.com/expressjs/cookie-parser
- **dotenv** - https://github.com/motdotla/dotenv
- **jsonwebtoken** - https://github.com/auth0/node-jsonwebtoken
- **mongodb** - https://www.mongodb.com/
- **morgan** - https://github.com/expressjs/morgan
- **eslint** - https://eslint.org/
- **prettier** - https://prettier.io/


## Endpoints

**POST** `/user` Crea un nuevo usuario

request: `{
"name": "Pedro Garcia",
"username": "pedrogarcia@gmail.com",
"password": "password1234"
}`

**GET** `/user` Devuelve todos los usuarios

**POST** `/user/login` Logueo de usuario (devuelve JWT) - 
request: `{
"username": "carlosgomez@gmail.com",
"password": "pass1234"
}`

**POST** `/stock` Crea un nuevo stock - 
request: `{
"productId": "62b4dd941193bd6eedf209eb",
"storeId": "62b4de0381b7e9f564d8a73f"
}`

**GET** `/stock` Devuelve todos los stocks

**GET** `/stock/{id}` Devuelve stock por ID

**DELETE** `/stock/{id}` Elimina stock por ID

**PUT** `/stock/{stockID}/sell/{customerID}/{qty}`Venta de stock

**PUT** `/stock/{stockID}/increase/{qty}`Incremento de stock

**PUT** `/stock/{stockID}/increase/{qty}`Decrecimiento de stock

**POST** `/store` Crea un nuevo store -
request: `{
"name": "store 1"
}`

**GET** `/store` Devuelve todos los stores

**GET** `/store/{id}` Devuelve store por ID

**POST** `/customer` Crea un nuevo customer

**GET** `/customer/{id}` Devuelve customer por ID -
request: `{
"name": "customer 1"
}`

**GET** `/customer` Devuelve todos los customers

**POST** `/product` Crea un nuevo producto

**GET** `/product/{id}` Devuelve product por ID -
request:  `{
"name": "producto de test 1",
"sku" : "SKU001"
}`

**GET** `/product` Devuelve todos los productos

**GET** `/history` Devuelve todo el historial -
Este endpoint incluye paginación ej: `?pageSize=2&page=1`

**Todos los endpoints están protegidos bajo bearer token JWT (exceptuando /login)**
