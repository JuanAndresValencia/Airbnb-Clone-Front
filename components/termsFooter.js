import styled from 'styled-components'
import Image from 'next/image'

const termsFooter = () => {
  return (
    <Container>
       <TermsContainer>
         <p>@ 2021 Airbnb, Inc</p>
         <p>Privacidad</p>
         <p>Términos</p>
         <p>Mapa del sitio</p>
       </TermsContainer>

       <SocialContainer>
         <OptionsContainer>
           <p>Español (CO)</p>
           <p>$ COP</p>
         </OptionsContainer>

         <IconsContainer>
           <Image 
            src='/images/facebook.png'
            width={25}
            height={25}
           
           />

          <Image 
            src='/images/twitter-sign.png'
            width={25}
            height={25}
           />

           <Image 
            src='/images/instagram.png'
            width={25}
            height={25}
           />
         </IconsContainer>
       
       </SocialContainer> 
    </Container>
  )
}

export default termsFooter


const Container = styled.div`
   width: 100%;
   margin: 0 auto;
   display: flex;
   max-width: 1700px;
   justify-content: space-between;
   padding-left: 120px;
   padding-right: 120px;
   padding-bottom: 20px;
   align-items: center;
   color: #4D4D4D;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

   @media screen and (max-width: 1000px){
       flex-direction: column;
       gap: 20px;
   }
`

const TermsContainer = styled.div`
   display: flex;
   gap: 20px;
   align-items: center;

   @media screen and (max-width: 600px){
       flex-direction: column;
   }
`

const SocialContainer = styled.div`
   display: flex;
   gap: 60px;
   align-items: center;

   @media screen and (max-width: 600px){
       flex-direction: column;
   }
`

const OptionsContainer = styled.div`
   display: flex;
   gap: 20px;
   text-decoration: underline;
   font-weight: 500;
`

const IconsContainer = styled.div`
   display: flex;
   gap: 10px;
   cursor: pointer;
`