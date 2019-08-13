const mongoose = require('mongoose');
const url = process.env.DATABASEURL || 'mongodb://localhost/dad-a-base';
mongoose.set('debug', true);
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  keepAlive: true
});
