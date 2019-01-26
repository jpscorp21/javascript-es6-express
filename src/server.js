import bodyParser from 'body-parser';
import express from 'express';
import router from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', router);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

export default app;
