import React, {useState}  from 'react'
import styled from "styled-components"
import { ChatView } from '../components/ChatView'
import { Modal } from '../components/Modal'




export const HomePage   = () => {

    const [user, setUser] = useState({username: "", id: ""})

    const handleSetUser = (param: {username: string}) => {
        const user = {...param, id: Date.now().toString()}
        setUser(user)
    }
  return (
  <Container>
   {!user.username && <Modal handleSubmit={handleSetUser} />}
    <ChatView/>
  </Container>
   )
 }


 const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
 `