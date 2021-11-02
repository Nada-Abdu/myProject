const mongoose = require('mongoose');

//user collection
try {
    var user = new mongoose.Schema({
        userId: Number, //pk
        name: String,
        nameOfCompany: String,
        email:String,
        password:String
    });
}
catch (err) {
    console.log(err);
}

mongoose.model('user', user);

//project collection
try {
  var project = new mongoose.Schema({
      projectId: Number, //pk
      userId: Number, //fk
      numberOfProject: Number,
      name: String,
      date: String,
      budget: Number,
      reminder: Number,
  });
}
catch (err) {
  console.log(err);
}

mongoose.model('project', project);

//subaccount collection
try {
  var subaccount = new mongoose.Schema({
      subaccountId: Number, //pk
      projectId: Number, //fk
      numberOfSubaccount: Number,
      name: String,
      date: String,
      cost: Number
  });
}
catch (err) {
  console.log(err);
}

mongoose.model('subaccount', subaccount);

//invoice collection
try {
  var invoice = new mongoose.Schema({
      invoicetId: Number, //pk
      subaccountId: Number, //fk
      numberOfInvoice: Number,
      date: String,
      description: String,
      cost: Number,
      invoice: String
  });
}
catch (err) {
  console.log(err);
}

mongoose.model('invoice', invoice);




module.exports = {
    user: mongoose.model('user'),
    project: mongoose.model('project'),
    subaccount: mongoose.model('subaccount'),
    invoice: mongoose.model('invoice'),
};