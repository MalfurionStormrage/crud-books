if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();    
}

//require
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//imports
import route from './routes/index-routes-api'; // routers api
import { connect } from './database'; // db connection

//setting
const server = express();
server.set('port', process.env.PORT || 4000);

//midellwares
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

//db connection
connect();

//routes api
server.use('/api', route);

//static file
server.use(express.static(path.join(__dirname, './public')));

//export server
export default server;

