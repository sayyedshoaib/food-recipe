require('dotenv').config();
// const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

require('./db/conn');
// const User = require('./model/userSchema')
app.use(express.json());

app.use(require('./router/auth'))

app.listen(8000);