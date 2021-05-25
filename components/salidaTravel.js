import styled from 'styled-components'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import moment from 'moment'

const salidaTravel = ({setDate}) => {

  const handleSelect = (date) => {
    setDate(moment(date).format('D MMMM'))
  }
  


  return (
    <Container>
      <Calendar 
        date={new Date()}
        onChange={handleSelect}
      
      />
    </Container>
  )
}

export default salidaTravel;


const Container = styled.div`
   position: absolute;
   width: 900px;
   top: 245px;
   display: flex;
   justify-content: center;

   @media screen and (max-width: 1050px){
     justify-content: center;
     position: absolute;
     overflow: hidden;
     width: 80%;
   }
   
`