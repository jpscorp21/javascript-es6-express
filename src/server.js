import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});

export default app;
