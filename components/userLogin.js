import { useState } from 'react';
import styled from 'styled-components'

const userLogin = () => {

  
  return (
    <Container>
      <p>Registrate</p>
      <p>Iniciar Sesion</p>
      <hr />
      <p>Hospeda en tu alojamiento</p>
      <p>Organiza una experiencia</p>
      <p>Ayuda</p>
    </Container>
  )
}

export default userLogin;

const Container = styled.div`
  position: absolute;
  margin-top: 320px;
  margin-left: 15px;
  width: 250px;
  height: 240px;
  border-radius: 15px;
  background-color: #ffffff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 20px;

  p{
      :first-child{
          margin-top: 5px;
      }
      margin-top: 22px;

      &:hover{
          cursor: pointer;
      }
  }

  hr{
      width: 100%;
      margin-top: 20px;
  }
  
  
`