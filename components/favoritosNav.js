import styled from 'styled-components'

const favoritosNav = () => {
  return (
    <Container>
       <h1>Escápate a la <br /> naturaleza</h1>
       <p>Favoritos seleccionados por Airbnb.</p>
       <button>Encuentra la inspiración</button>
    </Container>
  )
}

export default favoritosNav;


const Container = styled.div`
   width: 90%;
   max-width: 1650px;
   height: 400px;
   margin: 0 auto;
   background-image: url('/images/headerbg.webp');
   background-size: cover;
   background-position: bottom;
   background-repeat: no-repeat;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   padding-left: 90px;
   margin-top: 40px;

   @media screen and (max-width: 600px){
       padding-left: 30px;
   }

   h1{
       font-size: 50px;
       color: #222222;
       font-weight: 500;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       
       @media screen and (max-width: 600px){
         font-size: 30px;
       }
   }

   p{
       color: #222222;
       font-weight: 400;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       margin-top: 10px;
       font-size: 20px;

       @media screen and (max-width: 600px){
         font-size: 17px;
       }
   }

   button{
       font-weight: 400;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       margin-top: 10px;
       font-size: 17px;
       padding: 8px 18px;
       border: none;
       background-color: #222222;
       color: white;
       border-radius: 6px;

       @media screen and (max-width: 600px){
         font-size: 16px;
         padding: 6px 12px;
       }
   }
`