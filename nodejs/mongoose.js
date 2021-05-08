var mongoose = require('mongoose');
mongoose.connect('mongodb://39.106.100.189:10050/test1', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', function () {
  console.log('error');
});
db.once('open', function() {
  console.log('success');
  var User = mongoose.model('User', {
    name: String,
    age: Number
  });
  var fluffy = new User({ name: 'ming', age: 15 });
  
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
  });
});