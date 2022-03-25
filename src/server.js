
  
import app from './app';



const PORT = process.env.RUN_PORT ? process.env.RUN_PORT : 3000;

app.listen(PORT);