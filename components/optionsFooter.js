import styled from 'styled-components'

const optionsFooter = () => {
  return (
    <Container>
      <SubContainer>
      <AcercaContainer>
        <h3>ACERCA DE</h3>
        <p>Cómo funciona Airbnb</p>
        <p>Sala de prensa</p>
        <p>Inversionistas</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
        <p>HotelTonight</p>
        <p>Airbnb for Work</p>
        <p>Los anfitriones lo hacen posible</p>
        <p>Carreras</p>
        <p>Carta de los fundadores</p>
      </AcercaContainer>

      <ComunidadContainer>
        <h3>COMUNIDAD</h3>
        <p>Diversidad e inclusión</p>
        <p>Accesibilidad</p>
        <p>Colaboradores de Airbnb</p>
        <p>Alojamientos para Personal de Emergencia COVID-19</p>
        <p>Invitaciones para huéspedes</p>
        <p>Airbnb.org</p>
      </ComunidadContainer>

      <AnfitrionContainer>
        <h3>ANFITRIÓN</h3>
        <p>Recibe huéspedes en tu hogar</p>
        <p>Ofrece una experiencia en linea</p>
        <p>Organiza una experiencia</p>
        <p>Ser un anfitrión responsable</p>
        <p>Centro de recursos</p>
        <p>Centro de la comunidad</p>
      </AnfitrionContainer>

      <AsistenciaContainer>
        <h3>ASISTENCIA</h3>
        <p>Nuestra respuesta frente a la COVID-19</p>
        <p>Centro de ayuda</p>
        <p>Opciones de cancelación</p>
        <p>Asistencia al vecindario</p>
        <p>Confianza y seguridad</p>
      </AsistenciaContainer>
      </SubContainer>
    </Container>
  )
}

export default optionsFooter;


const Container = styled.div`
   width: 100%;
   background-color: #F7F7F7;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   margin: 40px auto;
   padding-top: 80px;
   display: flex;
   justify-content: center;

`

const SubContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   justify-items: center;
   max-width: 1900px;
   padding-bottom: 50px;
   padding-left: 70px;
   padding-right: 70px;

   @media screen and (max-width: 1000px){
       grid-template-columns: repeat(2, 1fr);
       align-items: center;
   }

   @media screen and (max-width: 600px){
       grid-template-columns: repeat(1, 1fr);
       text-align: center;
   }

`

const AcercaContainer = styled.div`
   display: grid;
   grid-gap: 14px;
   
   @media screen and (max-width: 1000px){
       justify-items: center;
       width: 100%;
       height: 100%;
   }
   h3{
       font-size: 15.5px;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       font-weight: 600;
       padding-bottom: 5px;
       margin-top: 50px;
   }

   p{
       font-size: 14px;
       font-weight: 400;
       color: #4D4D4D;

       &:hover{
           text-decoration: underline;
           cursor: pointer;
       }
   }
`

const ComunidadContainer = styled(AcercaContainer)`

`

const AnfitrionContainer = styled(AcercaContainer)`

`

const AsistenciaContainer = styled(AcercaContainer)`

`