import styled from 'styled-components'

const CovidAnuncio = () => {
  return (
    <Container>
      <p>Conoce las últimas novedades sobre las medidas que estamos tomando ante el coronavirus</p>
    </Container>
  )
}

export default CovidAnuncio;

const Container = styled.div`
   width: 100%;
   background-color: #222222;
   height: 58px;
   display: flex;
   justify-content: center;
   align-items: center;

   p{
     color: #B5B5B5;
     text-decoration: underline;
     text-align: center;
     cursor: pointer;
     font-size: 14.5px;
     font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
     font-weight: 600;
   }
`
