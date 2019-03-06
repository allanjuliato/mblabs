import express from 'express';
import consign from 'consign'
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app)

export default app