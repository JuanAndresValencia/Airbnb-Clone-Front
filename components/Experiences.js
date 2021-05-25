import styled from 'styled-components'

const Experiences = () => {
  return (
    <Container>
      <TitleTextContainer>
        <h1>Descubre experiencias</h1>
        <h2>Actividades únicas con expertos locales, en persona o en linea.</h2>
      </TitleTextContainer>

      <ExperiencesContainer>
        <Experience1>
          <img src='images/experiencia1.webp' />
          <h3>Colección destacada: Espíritu viajero</h3>
          <p>Viaja desde casa con las experiencias en línea.</p>
        </Experience1>

        <Experience1>
          <img src='images/experiencia2.webp' />
          <h3>Experiencias en línea</h3>
          <p>Actividades interactivas en directo de la mano de anfitriones.</p>
        </Experience1>

        <Experience1>
          <img src='images/experiencia3.webp' />
          <h3>Experiencias</h3>
          <p>Actividades con personas locales estés donde estés.</p>
        </Experience1>
      </ExperiencesContainer>
    </Container>
  )
}

export default Experiences;


const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   max-width: 1800px;
   margin: 0 auto;
   padding-top: 70px;
   color: #222222;
   padding-left: 50px;
   padding-right: 50px;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TitleTextContainer = styled.div`
   width: 100%;
   padding-left: 15px;

   @media screen and (max-width: 900px){
         padding: 20px;
         text-align: left;
    }

   h1{
     font-size: 35px;
     font-weight: 500;

     @media screen and (max-width: 900px){
         font-size: 28px;
         
      }
   }

   h2{
     font-weight: 400;
     @media screen and (max-width: 900px){
         font-size: 20px;
         
      }
   }
`

const ExperiencesContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(3, minmax(0, 1fr));
   height: 100%;
   grid-gap: 0px;

   @media screen and (max-width: 800px){
     grid-template-columns: repeat(1, minmax(0, 1fr));
   }
`


const Experience1 = styled.div`
   width: 100%;
   padding: 20px;

   img{
     width: 100%;
     border-radius: 12px;
     object-fit: cover;
   }

   h3{
     font-size: 20px;
     font-weight: 500;
     margin-top: 5px;
   }

   p{
     font-size: 16px;
     font-weight: 400;
     margin-top: 3px;
   }
`