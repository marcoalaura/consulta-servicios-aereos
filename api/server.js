const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3001;

// Registro de la data cargada
const services = {
  totalRegistrosVuelo: 12356,
  totalRegistrosMonitoreo: 158392,
  registrosVuelo: 296,
  fechaRegistrosVuelo: '13/07/2022',
  registrosMonitoreo: 652,
  fechaRegistrosMonitoreo: '13/07/2022',
};

// Registro de la data cargada
const users = [
  {
    firstName: "Marco Antonio",
    lastName: "Laura Avendaño",
    email: "marco.laura@gmail.com"
  },
  {
    firstName: "Consulta",
    lastName: "General",
    email: "consulta.general@gmail.com"
  },
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/services', (req, res) => {
  console.log('api/services called!')
  res.json(services);
});

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Agregando usuario:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto::${port}`);
});