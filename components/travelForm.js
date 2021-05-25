import styled from 'styled-components'
import { useState } from 'react'
import LlegadaTravel from '../components/llegadaTravel'
import SalidaTravel from '../components/salidaTravel'
import HuespedesTravel from '../components/huespedesTravel'
import { DateRange } from 'react-date-range'


const travelForm = () => {

  const [ llegadaCalendar, setLlegadaCalendar ] = useState(false)
  const [ llegadaDate, setLlegadaDate ] = useState('')

  const [ salidaCalendar, setSalidaCalendar] = useState(false)
  const [ salidaDate, setSalidaDate ] = useState('')

  const [ huespedesCantidad, setHuespedesCantidad ] = useState(false)
  const [ huespedesTotales, setHuespedesTotales ] = useState(0)

  

  return (
    <Container>
      <UbicacionContainer>
        <label htmlFor='ubicacion'>Ubicación</label>
        <input 
          id='ubicacion'
          placeholder='¿A dónde viajas?'
        />  
      </UbicacionContainer>
      <LlegadaContainer>
        <label htmlFor='llegada'>Llegada</label>
        <input 
          id='llegada'
          placeholder='¿Cuándo?'
          value={llegadaDate}
          onClick={() => {
            setLlegadaCalendar(!llegadaCalendar)
          }}
        />   
      </LlegadaContainer>
      <SalidaContainer>
        <label htmlFor='salida'>Salida</label>
        <input 
          id='salida'
          placeholder='¿Cuándo?'
          value={salidaDate}
          onClick={() => {
            setSalidaCalendar(!salidaCalendar)
          }}
        />   
      </SalidaContainer>
      <HuespedesContainer>
        <label htmlFor='huespedes'>Huéspedes</label>
        <input 
          id='huespedes'
          placeholder='¿Cuántos?'
          onClick={() => {
            setHuespedesCantidad(!huespedesCantidad)
          }}
          value={huespedesTotales}
        />  
      </HuespedesContainer>
      <SearchContainer>
        <img src='/images/search-icon.svg' />
      </SearchContainer>
      {llegadaCalendar && <LlegadaTravel setDate={setLlegadaDate}/>}
      {salidaCalendar && <SalidaTravel setDate={setSalidaDate}/>}
      {huespedesCantidad && <HuespedesTravel setHuespedes={setHuespedesTotales}/> }
    </Container>
    
  )
}

export default travelForm;

const Container = styled.div`
   background-color: #FFFFFF;
   width: 80%;
   margin: 0 auto;
   max-width: 900px;
   height: 70px;
   display: flex;
   border-radius: 30px;

   @media screen and (max-width: 950px){
     margin-top: 20px;
   }

   @media screen and (max-width: 700px){
     flex-direction: column;
     height: auto;
     width: 90%;
     border-radius: 10px;
     gap: 5px;
     background-color: transparent;
   }

   @media screen and (max-width: 600px){
     margin-top: -15px;
   }
   

`

const UbicacionContainer = styled.div`
   height: 100%;
   border-radius: 50px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 5px 20px;
   background-color: white;

   &:hover{
    -webkit-box-shadow: -5px -9px 76px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: -5px -9px 76px -17px rgba(0,0,0,0.75);
    box-shadow: -5px -9px 76px -17px rgba(0,0,0,0.75);
   }


   label{
     font-size: 14px;
     font-weight: 500;
   }

   input{
     border: none;
     outline: none;
     font-size: 14.8px;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     margin-top: 5px;
     border: none;
     width: 100%;
     &:hover{
       cursor: pointer;
     }

    
 }
`

const LlegadaContainer = styled(UbicacionContainer)`
  

` 

const SalidaContainer = styled(UbicacionContainer)`
  
  
`

const HuespedesContainer = styled(UbicacionContainer)`
  
  
  
`

const SearchContainer = styled.div`
   display: flex;
   align-items: center;

   @media screen and (max-width: 700px){
     display: none;
   }
   
   img{
    background: #E54354;
    position: absolute;
    cursor: pointer;
    margin-left: -65px;
    width: 50px;
    height: 48px;
    padding: 15px;
    border-radius: 50%;
  }
`

