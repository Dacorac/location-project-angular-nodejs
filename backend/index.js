// Import app
const app = require('./app');

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("El servidor está inicializado");
});

