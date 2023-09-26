const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});

app.get('/clientes', (req, res) => {
  res.send('Lista de clientes: Cliente 1, Cliente 2, Cliente 3');
});

app.get('/productos', (req, res) => {
  res.send('Lista de productos: Producto 1, Producto 2, Producto 3');
});

app.listen(port, () => {
  console.log(`La aplicación está funcionando en el puerto ${port}`);
});
