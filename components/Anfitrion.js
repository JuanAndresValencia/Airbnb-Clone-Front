import styled from 'styled-components'

const Anfitrion = () => {
  return (
    <Container>
      <h1>Conviértete en <br/>anfritrión</h1>
      <p>Gana dinero extra y descubre nuevas <br />oportunidades al compartir tu espacio</p>
      <button>Más información</button>
    </Container>
  )
}

export default Anfitrion;

const Container = styled.div`
   width: 90%;
   margin: 0 auto;
   max-width: 1650px;
   background-image: url('/images/anfitrion.webp');
   height: 400px;
   background-position: center;
   background-size: cover;
   border-radius: 10px;
   background-repeat: no-repeat;
   margin-top: 60px;
   display: flex;
   flex-direction: column;
   padding: 40px 70px;
   color: white;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   padding-top: 100px;

   @media screen and (max-width: 600px){
       padding: 20px 35px;
   }

   h1{
       color: white;
       font-size: 45px;
       font-weight: 500;
       padding-bottom: 10px;

       @media screen and (max-width: 600px){
           font-size: 35px;
       }
   }

   p{
       font-size: 20px;
       font-weight: 300;
       padding: 5px;
       padding-bottom: 30px;

       @media screen and (max-width: 600px){
           font-size: 17px;
       }
   }

   button{
       background-color: white;
       width: 200px;
       height: 45px;
       border: none;
       font-size: 18px;
       border-radius: 8px;
       font-weight: 500;
       color: #222222;
       cursor: pointer;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
       @media screen and (max-width: 600px){
           width: 180px;
           height: 40px;
           font-size: 17px;
       }
   
   }

`