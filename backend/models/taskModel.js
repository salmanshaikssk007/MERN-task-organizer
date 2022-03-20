const { default: mongoose } = require("mongoose");

const taskModuleSchema = mongoose.Schema(
    {
        title :{
            type : String ,
            required : true ,
            trim : true
        },
        tasks :{
            type : mongoose.Schema.Types.ObjectId ,
            required : true ,
            trim : true 
        }
    }
)

const Task = mongoose.model("Task" , taskModuleSchema);
module.exports = Task ;