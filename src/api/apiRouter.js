import express from 'express';
import {
  getScripts,
  saveNewScript,
  updateScript,
  deleteScript,
} from './apiController.js';



const app = express();

app.get("/get-scripts", getScripts);
app.post("/save-new-script", saveNewScript);
app.post("/update-script", updateScript);
app.post("/delete-script", deleteScript);

export default app;
