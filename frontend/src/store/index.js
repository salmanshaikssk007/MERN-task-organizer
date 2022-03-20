import { configureStore  } from '@reduxjs/toolkit';
import listReducer from '../reducers/listReducer';
import roomReducer from '../reducers/roomReducer';

const store = configureStore({
    reducer : {
        lists : listReducer ,
        rooms : roomReducer
    }
})

export default store ;