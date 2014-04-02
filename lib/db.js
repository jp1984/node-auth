var mongoose = require('mongoose');
var Schema = mongoose.Schema

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

//Cloud DB

var username = 'winston';
var password = 'smith';
var address = '@ds045137.mongolab.com:45137/nockmarketjp';

connect();

//Connect to mongo
function connect(){
  var url = 'mongodb://' + username + ':' + password + address;
  mongoose.connect(url);
}

function disconnect(){
  mongoose.disconnect();
}

