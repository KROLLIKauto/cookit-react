import { useState } from "react"
import styled from "@emotion/styled"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;

`

const Inputs = styled.input`
  width: 50%;
  height: 2.5rem;
  background-color: #979797;
  margin-bottom: 3rem;
  border-radius: 15px;
  
`

const Button = styled.button`
  width: 35%;
  height: 3rem;
  border-radius: 15px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 0px 15px 0px rgb(255, 255, 255);
  }
  
`

export default function FormAuthorisation() {

  const changeSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const login = formData.get('login')
    const password = formData.get('password')

    console.log(login, password);
  }
 

  return (
      <Form onSubmit={changeSubmit}>
        <Inputs
          name='login'
          placeholder='Login'
          required
        />
        <Inputs 
          name='password'
        />
        <Button>Go!</Button>
      </Form>
  )
}
