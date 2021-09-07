import { assetsMiddleware, prerenderedMiddleware, kitMiddleware } from '../build/middlewares.js';
import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
);
app.use(assetsMiddleware, prerenderedMiddleware, kitMiddleware);


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))