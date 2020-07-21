/*
  author: Pat Grady
  company: Adswerve
  date: 2020-7-20
*/

// Update this to your GTM Container ID
const CONTAINER_ID = "GTM-KHDQ8K7"
const PORT = process.env.PORT || '8080';

const express = require('express');
const path = require("path");
const favicon = require('express-favicon');
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get('/', (req,res,next) => {
  res.render("index", {section: "GTM Training", name: "Homepage", container: CONTAINER_ID })
});
app.get('/faq', (req,res,next) => {
  res.render("faq", {section: "GTM Training", name: "FAQ", container: CONTAINER_ID })
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

module.exports = app;
