const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const memectrl = require('./memectrl');
require('dotenv').config()


const app = express();
const { PORT, 
    CONNECTION_STRING, 
    SESSION_SECRET } = process.env;
app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db',db)
})

app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized:true
}))

app.get('/api/memes', memectrl.getMemes)




app.listen(PORT, ()=> console.log(`LET THE BODIES HIT THE FLOOR ON PORT ${PORT}`))