const express = require('express');
const apiRouter = require('./routers/api');
const initMongoose = require('../server-side-part-nodeJs/custom-modules/initMongoose');
const app = express();

app.use(express.json());
app.use('/api',apiRouter);


initMongoose().then(() => {
    app.listen(3000, () => {
      console.log('started listening on port 3000');
    });
  });
