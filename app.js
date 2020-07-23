/*
  author: Pat Grady
  company: Adswerve
  date: 2020-7-20
*/

// Change this to your GTM Container ID
const CONTAINER_ID = "GTM-REPLACE"
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
  /* Controller logic here */
  res.render("index", {section_name: "GTM Training", common_name: "Homepage", container: CONTAINER_ID })
});

app.get('/faq', (req,res,next) => {
  res.render("faq", {section_name: "GTM Training", common_name: "FAQ", container: CONTAINER_ID })
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

module.exports = app;
