import { createSlice } from "@reduxjs/toolkit";
import me from './../assets/images/pic 5.jpg'

const initialState = [
    {
        title : 'roomTitle1' ,
        id : 0 ,
        isGroupRoom : false ,
        pic : me
    },
    {
        title : 'roomTitle2' ,
        id : 1 ,
        isGroupRoom : true,
        pic : me
    }
]

const roomReducer = createSlice({

    name : 'room' ,
    initialState ,
    reducers : {
        
        addRoom : ( state , action )=>{

        }
    }
});

export const roomActions = roomReducer.actions ;
export default roomReducer.reducer ;