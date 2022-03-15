import { createSlice } from "@reduxjs/toolkit";
// import CONSTANTS from "../actions/index";

const initialState = [
    {
    title : 'TaskTitle 1' , 
    id : 0 ,
    cards : [
            {
                id : 0 ,
                text : 'we careated a static text for a static card'
            },
            {
                id : 1 ,
                text : 'we created a static text for a static card'
            }
        ]
    },
    {
        title : 'TaskTitle 2' , 
        id : 1 ,
        cards : [
                {
                    id : 0 ,
                    text : 'we careated a static text for a static card'
                },
                {
                    id : 1 ,
                    text : 'we created a static text for a static card'
                },
                {
                    id : 2 ,
                    text : 'we created a static text for a static card'
                }
            ]
        }
]

const listReducer = createSlice({

    name : 'lists',
    initialState,
    reducers : {
                    
            addList : (action , state) =>{
               
            },
        }
    }
);
export const listActions = listReducer.actions ;
export default listReducer.reducer ;