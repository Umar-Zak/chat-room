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

export const channelName = "messaging"
export const channel = new BroadcastChannel(channelName)



const slice = createSlice({
    name: "chats",
    initialState: {
        chats: []
    },

    reducers: {
        addMessage: (state: ChatSlice, action:ChatPayload):void => {
            state.chats.push(action.payload)
            setChats(state.chats)
            channel.postMessage(action.payload)
        },

        loadChats: (state: ChatSlice) => {
            state.chats = getChats()
        },
        receiveMessage: (state: ChatSlice, action:ChatPayload):void => {
            state.chats.push(action.payload)
            setChats(state.chats)
        },
    }
})
export default slice.reducer
export const {addMessage, loadChats, receiveMessage} = slice.actions