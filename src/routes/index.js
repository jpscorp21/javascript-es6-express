import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a la aplicacion');
});

router.get('/example', (req, res) => {
  res.send('Ejemplo');
});

router.get('/app', (req, res) => {
  res.send('Ejemplo');
});

router.get('/otroejemplo', (req, res) => {
  res.send('Otro ejemplo');
});

export default router;
