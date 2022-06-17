import { handler } from '../build/handler.js';
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
app.use(handler);


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))