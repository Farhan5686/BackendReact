const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task:String,
   done: {
        type:Boolean,
        Deafult:false
    }
})

const TodoModel = mongoose.model("gofood", TodoSchema)
module.exports = TodoModel