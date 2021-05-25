import { useEffect, useState } from 'react';
import styled from 'styled-components'

const huespedesTravel = ({setHuespedes}) => {

  console.log(setHuespedes)

  //Estados de adultos, niños y bebes
  const [ adultosCantidad, setAdultosCantidad ] = useState(0)
  const [ niñosCantidad, setNiñosCantidad ] = useState(0)
  const [ bebesCantidad, setBebesCantidad ] = useState(0)
  
  setHuespedes(`${adultosCantidad + niñosCantidad + bebesCantidad } Huespedes`)

  
  

  return (
    <Container>
      <HuespedesContainer>
        <AdultosContainer>
          <TextContainer>
            <p>Adultos</p>
            <p>13 años o más</p>
          </TextContainer>
          <CantidadContainer>
            <button onClick={() => {
              setAdultosCantidad(adultosCantidad - 1)
            }} > - </button>
            <p>{adultosCantidad}</p>
            <button onClick={() => {
              setAdultosCantidad(adultosCantidad + 1)
            }}> + </button>
          </CantidadContainer>
        </AdultosContainer>
        
        <NiñosContainer>
          <TextContainer>
            <p>Niños</p>
            <p>De 2 a 12</p>
          </TextContainer>
          <CantidadContainer>
            <button  onClick={() => {
              setNiñosCantidad(niñosCantidad - 1)
            }}> - </button>
            <p>{niñosCantidad}</p>
            <button onClick={() => {
              setNiñosCantidad(niñosCantidad + 1)
            }}> + </button>
          </CantidadContainer>
        </NiñosContainer>
          
        <BebesContainer>
          <TextContainer>
            <p>Bebés</p>
            <p>Menos de 2</p>
          </TextContainer>
          <CantidadContainer>
            <button onClick={() => {
              setBebesCantidad(bebesCantidad - 1)
            }}> - </button>
            <p>{bebesCantidad}</p>
            <button  onClick={() => {
              setBebesCantidad(bebesCantidad + 1)
            }}> + </button>
          </CantidadContainer>

        </BebesContainer>
      </HuespedesContainer>
    </Container>
    )
}

export default huespedesTravel;


const Container = styled.div`
   position: absolute;
   width: 900px;
   top: 245px;
   display: flex;
   justify-content: flex-end;

   @media screen and (max-width: 1050px){
     justify-content: center;
     position: absolute;
     overflow: hidden;
     width: 80%;
   }
`

const HuespedesContainer = styled.div`
   width: 400px;
   height: 240px;
   background-color: #ffffff;
   border-radius: 35px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const AdultosContainer = styled.div`
   width: 100%;
   display: flex;
   padding: 20px 30px 10px 30px;
   justify-content: space-between;
`

const NiñosContainer = styled(AdultosContainer)`

`

const BebesContainer = styled(AdultosContainer)`

`

const TextContainer = styled.div`
   p{
     :first-child{
        font-weight: 500;
        margin: 2px;
        color: black;
     }

     color: gray;
   }
`

const CantidadContainer = styled.div`
   display: flex;
   align-items: center;

   button{
       width: 30px;
       height: 30px;
       border-radius: 20px;
       margin: 7px;
       cursor: pointer;
       border: none;
       font-size: 23px;
   }

   p{
       font-size: 17px;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
`