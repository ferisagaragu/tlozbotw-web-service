import http from "http";
import express from "express";
import bodyParser from 'body-parser';
import morgan from 'morgan';

export const router = express();
export const { PORT = 3400 } = process.env;
export const server = http.createServer(router);

router.use(morgan('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});