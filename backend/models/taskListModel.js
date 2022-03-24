const { default: mongoose } = require("mongoose");

const taskListModuleSchema = mongoose.Schema(
    {
        taskTitle : {type : String , trim : true},
        tasks : [{ type : mongoose.Schema.Types.ObjectId ,ref : 'Task'}]
    }
)

const TaskList = mongoose.model("TaskList" , taskListModuleSchema);
module.exports = TaskList ;