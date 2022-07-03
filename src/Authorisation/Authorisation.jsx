import React from 'react'
import FormAuthorisation from './FormAuthorisation'
import styled from 'styled-components'
import img from '../img/brickWall.jpg'

const MainAuthorisationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const FormContainer = styled.div`
  display: flex;
  width: 50%;
  padding-top: 3%;
  height: 400px;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  color: #c5c5c5;
  margin-left: -5px;
  margin-top: -2%;
  font-size: 7rem;
  transform: skew(15deg, -15deg);
  font-family: Beau Rivage;
`

const Authorisation = () => {
  return (
    <MainAuthorisationContainer>
      <Title>Authorisation</Title>
      <FormContainer>
        <FormAuthorisation  />
      </FormContainer>
    </MainAuthorisationContainer>
  )
}

export default Authorisation