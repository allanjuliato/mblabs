import app from './config/express'
import https from 'https'
import fs from 'fs'
import path from 'path'
import events from './app/routes/events'

const port = 3000;

const options = {
    key: fs.readFileSync(path.resolve(__dirname  + '/server.key')),
    cert: fs.readFileSync(path.resolve(__dirname + '/server.cert'))
}

https.createServer(options, app).listen(port, () => {
    console.log(`Server Running in port: ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

