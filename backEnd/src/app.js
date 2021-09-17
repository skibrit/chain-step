import "@babel/polyfill";
import express from "express";
import { middleware as graphbrainz } from 'graphbrainz';
const app = express();

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/graphbrainz', graphbrainz());


app.use("/", (req, res) => {
  res.status(404).json({
    version: 1,
    msg: "Welcome to the ChainStep APi",
  });
});


app.use(function (err, req, res, next) {
  res.status(500).json({
    status: 500,
    msg: "Something went wrong",
  });
});

export default app;
