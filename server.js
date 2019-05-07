const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
  app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build/'))
  });
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

