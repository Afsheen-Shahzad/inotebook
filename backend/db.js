const mongoose=require('mongoose');
const mongoURI = "mongodb://localhost:27017";


const connectToMongo = async () => {
    mongoose.connect("mongodb://localhost:27017/inotebook",{
    family: 4,
}).then(() => {
    console.log("connection successfully ");
})
}

module.exports = connectToMongo;


/*

Link: https://stackoverflow.com/questions/76304154/mongooseserverselectionerror-connect-econnrefused-127017-error?rq=2

n node.js v18, localhost uses ipv6 address (::1), and by default mongodb localhost doesn't have ipv6 enabled. That's why you're facing this issue.

If you want to use ipv4 localhost address (127.0.0.1),

Either replace localhost with 127.0.0.1.
mongoose.connect("mongodb://127.0.0.1:27017/schooldb").then(() => {
    console.log("connection successfully ");
})
OR use family: 4 parameter. This tells the node.js localhost to use ipv4 address.
mongoose.connect("mongodb://localhost:27017/schooldb",{
    family: 4,
}).then(() => {
    console.log("connection successfully ");
})
OR

If you want to use the ipv6 address, then just start mongod with --ipv6 as argument. This enables mongodb ipv6 address.

mongod --ipv6

*/