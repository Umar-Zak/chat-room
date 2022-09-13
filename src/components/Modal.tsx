import React from 'react'
import styled from "styled-components"
import {Formik} from "formik"
import * as Yup from "yup"

const validateUsername = Yup.object().shape({
    username: Yup.string().required("Please enter username").label("Username")
})


interface ModalInterface {
    handleSubmit: (formValues: {username: string}) => void
}


export const Modal = ({handleSubmit}: ModalInterface) => {
  return (
    <Container>
        <Formik 
        initialValues={{
            username: ""
        }}
        validationSchema={validateUsername}
        onSubmit={values => handleSubmit(values)}
         >
            {
                ({handleChange, touched, errors, handleSubmit}) => (
                    <>
                    <InputsContainter>
                    <TextInput 
                    onChange={handleChange} 
                    name="username" 
                    placeholder='Enter your name' 
                    type="text" />
                    <SubmitButton 
                    onClick={() => handleSubmit()}
                     >
                        Join Chat
                        </SubmitButton>
                    </InputsContainter>
                      {errors.username && 
                      touched.username && 
                      <ErrorMessage>
                        {errors.username}
                      </ErrorMessage>}
                    </>
                )
            }
        </Formik>
      
    </Container>
   )
 }


 const Container = styled.div`
  display: flex; 
  flex-direction: column;
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  background-color: rgba(255, 255, 255);
  color: red;
  align-items: center;
  justify-content: center
 `

 const ErrorMessage = styled.div`
 width: 500;
 color: red;
 font-weight: 500;
 font-size: 1.4rem;
 margin-top: 10px
 `

 const InputsContainter = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between
 `

 const SubmitButton = styled.button`
 width: 140px;
 padding-block: 15px;
 text-align: center;
 color: white;
 background:#fd4957;
 border-radius: 7px;
 border: none;
 outline: none;
 cursor: pointer;
 font-weight: 700;
 font-size: 2rem
 `

 const TextInput = styled.input`
 outline: none;
 background: white;
 padding-block: 15px;
 padding-inline: 10px;
 border-radius: 7px;
 border: 1px solid #fd4957;
 width: 300px;
 font-size: 1.7rem
 `

 