require("dotenv").config()

import express from 'express';


import logger from 'morgan';
import bodyParser from 'body-parser';
import { urlencoded, json } from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";

import passportGoogle from 'passport-google-oauth';

import router from "./router";
import { initialiseAuthentication } from "./auth";

const GoogleStrategy = passportGoogle.OAuth2Strategy;

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'This is the root link'
  });
});

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());

app.use(passport.initialize());

router(app);
initialiseAuthentication(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server running')
});
