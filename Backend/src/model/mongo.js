const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://preethippk:ganapathi75@cluster0.oq4fh8a.mongodb.net/idcard");
const schema =mongoose.Schema;

const blogschema = new schema({
    name:String,
    ID:String,
    Email:String,
    Password:String,
    Course:String,
    Batch:String,
});
var blog =mongoose.model("admin",blogschema);
module.exports=blog;








