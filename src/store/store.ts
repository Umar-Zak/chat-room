import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import chatReducer from "./ChatSlice"

const rootReducer = combineReducers({
    chats: chatReducer
})
const store = configureStore({reducer:rootReducer, middleware: [...getDefaultMiddleware()] })


export default store