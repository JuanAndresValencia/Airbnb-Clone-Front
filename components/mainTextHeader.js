import styled from 'styled-components'

const mainTextHeader = () => {
  return (
    <Container>
      <h1>Vive a <br /> cielo abierto</h1>
      <p>Favoritos seleccionados por Airbnb.</p>
      <button>Encuentra tu inspiración</button>
    </Container>
  )
}

export default mainTextHeader;

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   padding-left: 8%;
   padding-top: 100px;

   @media screen and (max-width: 1400px){
     padding-top: 50px;
   }

   @media screen and (max-width: 700px){
       padding-top: 20px;
   }

   h1{
       font-size: 60px;

       @media screen and (max-width: 700px){
           font-size: 40px;
       }
   }

   p{
      font-size: 20px;
      font-weight: 400;
      margin-top: 8px;
   }

   button{
      background-color: #222222;
      padding: 10px 22px;
      color: white;
      border: none;
      margin-top: 8px;
      border-radius: 7px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;

      @media screen and (max-width: 700px){
          font-size: 14px;
          padding: 7px 11px;
      }
   }
`
