//importing modules
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const ip = '192.168.1.113';
const app = express();

const route = require('./routes/route');

const x = require('./models/contacts');
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/panelData', { useNewUrlParser: true });
//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @ 27017');
});
mongoose.connection.on('error', (err)=>{
    if (err) {
        console.log('Error in DataBase Connection:'+err);
    }
});
//port
const port = 3005;
//adding middleware - cors
app.use(cors());
//body - parser
app.use(bodyparser.json());
//routes

//testing server
app.get('/', (req, res) => {
    res.send('foobar');
});

app.use('/api', route);
//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, ip, () => {
    console.log('server started at port:'+port);
});