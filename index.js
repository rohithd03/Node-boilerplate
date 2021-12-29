const express = require("express");

const app = require('./src/api/index.js')

const PORT = 3000;

app.listen(process.env.PORT || PORT, function(){
  console.log(`Server started at port ${PORT}`);
});
