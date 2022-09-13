import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux"
import {addMessage, ChatBubble, channel, receiveMessage} from "../store/ChatSlice"


 interface ChatViewInterface {
    user: {
        username: string
        id: string
    }
 }

export const ChatView = ({user}: ChatViewInterface) => {
    let chats = useSelector<any, ChatBubble[]>((state: any) => state.chats.chats)
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")

    useEffect(() => {}, [chats])

    channel.onmessage = (message: MessageEvent<ChatBubble>) => {
        const data = message.data
        dispatch(receiveMessage(data))
    }

    const handleSendMessage = () => {
        if(!message) return

       dispatch(addMessage({user, message}))
       setMessage("")
    }

  return (
   <Container>
    <Header>
   <HeaderText>Chat room</HeaderText>
    </Header>
    <ChatArea>
        <div className="imessage">
       {
        chats.map((chat, index) => (
            <>
           {chat.user.id !== user.id && 
           <>
           <Them>{chat.user.username}</Them>
           <p key={index} className="from-them">{chat.message}</p>
           </>
           }
        {
        chat.user.id === user.id && 
        <>
        <UserContainer>
        <p>Me</p>
        </UserContainer>
        <p  key={index} className="from-me">{chat.message}</p>
        </>
        }
        </>
        ))
       }
        </div>

    </ChatArea>
    <BottomArea>
    <TextInput 
    value={message} 
    onChange={(event) => setMessage(event.target.value)} 
    type="text" placeholder='Type message'
     />
    <SendButton onClick={handleSendMessage}>Send</SendButton>
    </BottomArea>
   </Container>
   )
 }


const BottomArea = styled.div`
width: 100%;
height: 10%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
background:#fd4957
`

 const Container = styled.div`
width: 100%;
 @media screen and (min-width: 768px){
    width: 600px;
    height: 800px;
    border-radius: 10px;
    box-shadow: 0 5px 9px rgba(0, 0, 0, 0.30);
    margin-top: 50px
 }
 
 `

 const ChatArea = styled.div`
 width: 100%;
 height: 80%;
 overflow-y:  scroll;
 `

 const Header = styled.div`
 width: 100%;
 height: 10%;
 background: #fd4957;
 display: flex;
 align-items: center;
 justify-content: center;
 `

 const HeaderText = styled.p`
    color: white;
    font-weight: 700;
    font-size: 2.7rem;
    text-transform: uppercase
 `

 const SendButton  = styled.button`
  width: 120px;
  padding-block: 8px;
  text-align: center;
  color: #fd4957;
  background: white;
  border: 1px solid #fd4957;
  border-radius: 30px;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;

  @media screen and (min-width: 768px){
    width: 150px;
    padding-block: 10px;
  }
 `

 const TextInput = styled.input`
  width: 150px;
  padding-block: 10px;
  padding-inline: 20px;
  border-radius: 30px;
  background: white;
  outline: none;
  border: none;
  font-size: 1.7rem;

  @media screen and (min-width: 768px){
  width: 300px;
  padding-block: 15px;
  }
 `
 const Them = styled.p`
 margin-bottom: -3px
 `
 const UserContainer = styled.div`
 display: flex;
 width: 100%;
 justify-content: flex-end;
 margin-bottom: -17px
 `

 
 