import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';


const app = express();
const port = 3000;

// Serve static files from the "/home/no_flac/Work/new_corpo_design" directory
app.use(express.static('/home/no_flac/Work/new_corpo_design/templates/'));

app.get('/', (req, res) => {
  const filePath = '/home/no_flac/Work/new_corpo_design/templates/home.html';
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
