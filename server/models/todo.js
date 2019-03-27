let mongoose = require("mongoose");

// create a model class
let todoSchema = mongoose.Schema(
  {
    projectName: String,
    description: String,
    dueDate: String
  },
  {
    collection: "todo"
  }
);

module.exports = mongoose.model("test", todoSchema);
