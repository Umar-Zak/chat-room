import { createSlice } from "@reduxjs/toolkit";


export type ChatBubble = {
    user: {
        username: string,
        id: string
    },
    message: string

}

type ChatSlice = {
    chats: ChatBubble[]
}

type ChatPayload = {
    type: string
    payload: ChatBubble
}
const KEY = "chats"


const setChats = (chats: ChatBubble[]) => {
    localStorage.setItem(KEY, JSON.stringify(chats))
}


const getChats = () => {
    const chats = JSON.parse(localStorage.getItem(KEY)|| "[]") as ChatBubble[]
    return chats
}

const slice = createSlice({
    name: "chats",
    initialState: {
        chats: []
    },

    reducers: {
        addMessage: (state: ChatSlice, action:ChatPayload):void => {
            state.chats.push(action.payload)
            setChats(state.chats)
        },

        loadChats: (state: ChatSlice) => {
            state.chats = getChats()
        }
    }
})
export default slice.reducer
export const {addMessage, loadChats} = slice.actions