import React from 'react'
import styled from "styled-components"


 

export const ChatView = () => {
  return (
   <Container>
    <Header>
<HeaderText>Chat room</HeaderText>
    </Header>
    <ChatArea>
        <div className="imessage">
        <p className="from-them">It was loud. We just laid there and said &ldquo;is this an earthquake? 
        rdI think this is an earthquake.
        I think this is an earthquake.I think this is an earthquake.
        I think this is an earthquake.
        I think this is an earthquake.
        </p>
    <p className="from-me">Like is this an earthquake just go back to sleep</p>
        </div>

    </ChatArea>
    <BottomArea>
    <TextInput type="text" placeholder='Type message' />
    <SendButton>Send</SendButton>
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
 width: 600px;
 height: 800px;
 border-radius: 10px;
 box-shadow: 0 5px 9px rgba(0, 0, 0, 0.30);
 margin-top: 50px
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
  width: 150px;
  padding-block: 10px;
  text-align: center;
  color: #fd4957;
  background: white;
  border: 1px solid #fd4957;
  border-radius: 30px;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
 `

 const TextInput = styled.input`
  width: 330px;
  padding-block: 15px;
  padding-inline: 20px;
  border-radius: 30px;
  background: white;
  outline: none;
  border: none;
  font-size: 1.7rem
 `

 