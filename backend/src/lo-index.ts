import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createConnection } from 'typeorm';

import * as routes from './routes';

require('dotenv').config();

const app = express();

createConnection({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        "./entity/**/*.ts"
    ],
    logging: false,
    synchronize: true
}).then()

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));

// routes
app.use(routes.articleRouter);
app.use(routes.categorieRouter);
app.use(routes.authRouter);

let port = 3700;

app.listen(port);

console.log(`Life Opedia Server running on port ${port}.`);