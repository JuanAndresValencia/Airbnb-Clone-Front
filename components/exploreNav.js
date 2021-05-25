import styled from 'styled-components'
import Image from 'next/image'

const exploreNav = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Explora cerca de ti</h1>
      </TextContainer>
      <DestinosContainer>
        <Ciudad1>
          <ImgContainer>
            <Image 
              src='/images/city1.jpg'
              width={80}
              height= {80}
            />
          </ImgContainer>
          <CiudadDataContainer>
            <h2>Manizales</h2>
            <p>2.5 horas en auto</p>
          </CiudadDataContainer>
        </Ciudad1>

        <Ciudad2>
          <ImgContainer>
            <Image 
              src='/images/city2.webp'
              width={80}
              height= {80}
            />
          </ImgContainer>
          <CiudadDataContainer>
            <h2>Honda</h2>
            <p>2.5 horas en auto</p>
          </CiudadDataContainer>
        </Ciudad2>

        <Ciudad3>
          <ImgContainer>
            <Image 
              src='/images/city3.webp'
              width={80}
              height={80}
            />
          </ImgContainer>
          <CiudadDataContainer>
            <h2>Barbosa</h2>
            <p>5 horas en auto</p>
          </CiudadDataContainer>
        </Ciudad3>

        

        <Ciudad4>
          <ImgContainer>
            <Image 
              src='/images/city4.webp'
              width={80}
              height={80}
            />
          </ImgContainer>
          <CiudadDataContainer>
            <h2>Mariquita</h2>
            <p>2.5 horas en auto</p>
          </CiudadDataContainer>
        </Ciudad4>

        <Ciudad5>
          <ImgContainer>
            <Image 
              src='/images/city5.webp'
              width={80}
              height={80}
            />
          </ImgContainer>
          <CiudadDataContainer>
            <h2>Medellin</h2>
            <p>4.5 horas en auto</p>
          </CiudadDataContainer>
        </Ciudad5>

        <Ciudad6>
          <ImgContainer>
            <Image 
              src='/images/city6.webp'
              width={80}
              height={80}
            />
          </ImgContainer>
          <CiudadDataContainer>
            <h2>La Mesa</h2>
            <p>4.5 horas en auto</p>
          </CiudadDataContainer>
        </Ciudad6>


      </DestinosContainer>
    </Container>
  )
}

export default exploreNav;


const Container = styled.div`
   width: 100%;
   padding-top: 80px;
   display: flex;
   margin: 0 auto;
   flex-direction: column;
   max-width: 1600px;
   padding-left: 100px;

   @media screen and (max-width: 900px){
       padding-left: 50px;
   }
`

const TextContainer = styled.div`
   padding-bottom: 25px;
   h1{
       font-size: 35px;
       color: #222222;
       font-weight: 500;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     
       @media screen and (max-width: 900px){
         font-size: 28px;
       }
   
    
   }

   
`

const DestinosContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 20px;
   justify-items: flex-start;

   @media screen and (max-width: 900px){
       grid-template-columns: repeat(2, 1fr);
   }

   @media screen and (max-width: 500px){
       grid-template-columns: repeat(1, 1fr);
   }

   
`

const Ciudad1 = styled.div`
   display: flex;
   cursor: pointer;
   
   img{
       border-radius: 7px;
   }
`

const Ciudad2 = styled(Ciudad1)`

`

const Ciudad3 = styled(Ciudad1)`

`

const Ciudad4 = styled(Ciudad1)`

`

const Ciudad5 = styled(Ciudad1)`

`

const Ciudad6 = styled(Ciudad1)`

`

const ImgContainer = styled.div`

`

const CiudadDataContainer = styled.div`
   padding-left: 12px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;

   h2{
       font-size: 18px;
       color: #222222;
       font-weight: 600;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }

   p{
       font-size: 16px;
       font-weight: 400;
   }
`