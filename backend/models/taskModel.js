const mongoose = require('mongoose');

// defining schema
const taskModelSchema = mongoose.Schema(
    {
        sender : {type : mongoose.Schema.Types.ObjectId , ref : 'User'},
        content : {type : String  , trim : true},
        room : { type : mongoose.Schema.Types.ObjectId , ref : 'Room'},
        taskList : {type : mongoose.Schema.Types.ObjectId , ref : 'TaskList'}
    },
    {
        timestames : true ,
    }
)

const Task = mongoose.model('Task' , taskModelSchema);

module.exports = Task ;