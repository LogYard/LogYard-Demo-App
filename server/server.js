import express from 'express';
import logyardbackend from 'logyardbackend';

const { logyard } = logyardbackend;



const app = express();
const port = 3535;

app.listen(port, () => {
  logyard('info', 'Example Info Message', {server: port});
  logyard('error', 'Example Error Message', {Error:'Err'});
  logyard('silly', 'Example Silly Message', {Silly: 'true'});
  logyard('warn', 'Example Warn Message', {Warn:'Alert'});
  logyard('http', 'Example HTTP message', {URL:'logyard.io'});
  logyard('debug', 'Example Debug message', {status:'online'});
  logyard('verbose', 'Example Verbose message', {server: port, username:'codesmith', password:'password', locals:'res.locals.status'});
  console.log(`Server is running on port ${port}`);
});