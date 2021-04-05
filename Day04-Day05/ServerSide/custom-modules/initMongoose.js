const mongoose = require('mongoose');

module.exports = async () => {
  // TODO: Move constants to .env file.
  await mongoose.connect('mongodb://localhost:27017/ReactTask', {
    useNewUrlParser: true, useUnifiedTopology: true
  }).then(()=>{
    console.log('open db')
  }).catch(()=>{
    console.log('not open db')
  })
};
