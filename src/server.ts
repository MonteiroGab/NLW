import "reflect-metadata";
import express from 'express'

import "./database";

const app = express();
const port = 8080 

app.use(express.json())



app.listen(port);
console.log(`Server running at ${port}`)