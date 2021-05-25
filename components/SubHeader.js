import styled from 'styled-components'
import AirbnbOptions from '../components/airbnbOptions'
import TravelForm from '../components/travelForm'
import MainTextHeader from '../components/mainTextHeader'
import { DateRange } from 'react-date-range'


const SubHeader = () => {
  return (
    <Container>
      <AirbnbOptions />
      <TravelForm />
      <MainTextHeader />
    </Container>   
    
  )
}

export default SubHeader;


const Container = styled.div`
   width: 100%;
   height: 85vh;
   background-image: url('/images/headerbg.webp');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
`