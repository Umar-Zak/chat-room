import React, {useState, useEffect}  from 'react'
import styled from "styled-components"
import {useDispatch} from "react-redux"
import { ChatView } from '../components/ChatView'
import { Modal } from '../components/Modal'
import {loadChats} from "../store/ChatSlice"




export const HomePage   = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({username: "", id: ""})

    useEffect(() => {
        dispatch(loadChats())
    }, [])
    const handleSetUser = (param: {username: string}) => {
        const user = {...param, id: Date.now().toString()}
        setUser(user)
    }
  return (
  <Container>
   {!user.username && <Modal handleSubmit={handleSetUser} />}
    <ChatView user={user} />
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