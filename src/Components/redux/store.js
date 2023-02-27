import {configureStore} from "@reduxjs/toolkit"
import apiReducer from './slice/Api' 
import QueryApiReducer from './slice/QueryApi'

export const store =configureStore({
    reducer:{
        AllimagesReducer:apiReducer,
        QueryApiReducer:QueryApiReducer
    }
});