const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentQuizSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  studentid:[
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  ]
  
});

const StudentQuiz = mongoose.model("StudentQuiz", StudentQuizSchema);

module.exports = StudentQuiz;
