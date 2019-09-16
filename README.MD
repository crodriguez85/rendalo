## Test Rendalo Para Cargo FullStack
### Crear un servicio MERN (MongoDB, Express, React, NodeJS) con dos endpoints
### Endpoints creados:
- Add: Agrega un nuevo cliente a la base de datos
- List: Lista todos los clientes en la base de datos

### Por parte del Front hay dos rutas la ruta principal "/", y "nuevo-cliente"
- Ruta Principal Lista todos los clientes
- nuevo-cliente te permite crear nuevos clientes a traves de un formulario

# Montar y Correr Servicio
- Backend
```
cd server && npm install || cd server && yarn install
cd server && npm dev || cd server && yarn dev
```
- Servidor en:
```
http://localhost:8000/api/registro/add
http://localhost:8000/api/registro/list
```

- Frontend
```
cd client && npm install || cd client && yarn install
cd client && npm start || cd client && yarn start
```
- Frontend en:
```
http://localhost:30000
```

- Test
```
cd server && npm test || cd server && yarn test
```

### BD las envio con credenciales para probar el servicio, estando en producción esas variables no estan disponibles# rendalo
# rendalo
