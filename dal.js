const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://badbankadmin:ZJHYEIOsUH9FIEoN@cluster0.heox9.mongodb.net/test';
let db = null;

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db('badbank');
});

// create user account using the collection.insertOne function ADDED HERE
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const account = Math.floor(Math.random() * 1000000000 + 500);
        const doc = {name, email, password, balance:100, account};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    });
}

// find user account 
function find(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({ email: email })
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

// find user account
function findOne(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({ email: email })
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
    })
}

// update - deposit/withdraw amount
function update(email, amount) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: { balance: amount } },
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );


    });
}

// return all users by using the collection.find method
function all() {
    return new Promise((resolve, reject) => {
        const customers = db.collection('users')
        .find({})
        .toArray(function(err,docs) {
            err ? reject(err) : resolve(docs);
        });
    })
}


module.exports = { create, findOne, find, update, all };