import styled from 'styled-components'

const placesNav = () => {
  return (
    <Container>
      <TextTitleContainer>
        <h1>Vive en cualquier lugar del mundo</h1>
      </TextTitleContainer>

      <Places>
       <PlaceContainer1>
        <img src='/images/house1.webp' />
        <p>Escapadas al aire libre</p>
       </PlaceContainer1>
       <PlaceContainer2>
        <img src='/images/house2.webp' />
        <p>Alojamientos únicos</p>
       </PlaceContainer2>
       <PlaceContainer3>
        <img src='/images/house3.webp' />
        <p>Alojamientos enteros</p>
       </PlaceContainer3>
       <PlaceContainer4>
        <img src='/images/pet.webp' />
        <p>Con tu mascota</p>
       </PlaceContainer4>
      </Places>
    </Container>
  )
}

export default placesNav;


const Container = styled.div`
   width: 100%;
   padding-top: 60px;
   display: flex;
   flex-direction: column;
   max-width: 1800px;
   margin: 0 auto;

   
`

const TextTitleContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   h1{
      font-size: 35px;
      color: #222222;
      font-weight: 500;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      padding-left: 70px;
      @media screen and (max-width: 900px){
         font-size: 28px;
         padding: 20px;
         text-align: left;
      }
      
  
  
   }

   
`

const Places = styled.div`
   width: 100%;
   display: grid;
   grid-gap: 25px;
   grid-template-columns: repeat(4, minmax(0, 1fr));
   padding: 70px;
   margin-top: -30px;

   @media screen and (max-width: 900px){
       grid-gap: 35px;
       grid-template-columns: repeat(2, minmax(0, 2fr));
   }

   @media screen and (max-width: 600px){
    grid-template-columns: repeat(1, minmax(0, 2fr));
   }
`

const PlaceContainer1 = styled.div`
   img{
       width: 100%;
       height: 100%;
       object-fit: cover;
       border-radius: 9px;
   }

   p{
       font-size: 18px;
       font-weight: 500;
       margin-top: 5px;
       color: #222222;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

   }
`

const PlaceContainer2 = styled(PlaceContainer1)`

`

const PlaceContainer3 = styled(PlaceContainer1)`

`

const PlaceContainer4 = styled(PlaceContainer1)`

`