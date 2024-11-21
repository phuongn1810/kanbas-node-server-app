import cors from 'cors';
import express from 'express';
import UserRoutes from "./Kanbas/Users/routes.js";

import Hello from "./Hello.js";
import Lab5 from './Lab5/index.js';

const app = express();
app.use(express.json());
app.use(cors(
    {
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
      }
     




));

Hello(app);
Lab5(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);