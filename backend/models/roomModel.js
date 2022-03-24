/**
 * roomName ,
 * isGroupChat ,
 * users ,
 * groupAdmin
 */
const { default: mongoose } = require("mongoose");

 // designing user scheme
 const roomModalScheme =  mongoose.Schema(
    {
        roomName : {
            type : String ,
            trim : true 
        },
        isGroupRoom : {
            type : Boolean ,
            default : false 
        },
        users : [{
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'User'
        }],
        groupAdmin : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'User'
        }
    },{
        timestamps : true 
    }
 )
 
 const Room = mongoose.model("Room" , roomModalScheme );
 
 module.exports = Room ;