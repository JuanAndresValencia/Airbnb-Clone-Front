import styled from 'styled-components'
import UserLogin from '../components/userLogin'
import { useState } from 'react'

const AirbnbOptions = () => {

  const [ userLogin, setUserLogin] = useState(false)


  return (
    <Container>
      <AirbnbLogoContainer>
        <img src='/images/airbnblogoheader.png' />
      </AirbnbLogoContainer>
      <TravelsOptions>
        <p>Lugares para hospedarte</p>
        <p>Experiencias</p>
        <p>Experiencias en línea</p>
      </TravelsOptions>
      <ButtonsOptions>
        <AnfitrionOptions>
          <p>Hazte Anfitrión</p>
          <img src='/images/worldlogo.png' />
        </AnfitrionOptions>
        <UserLogo onClick={() => {
          setUserLogin(!userLogin)
        }}>
          <img src='/images/menu-icon.png' />
          <img src='/images/user-logo.png' />
        </UserLogo>
        {userLogin && <UserLogin />}
      </ButtonsOptions>
    </Container>
  )
}

export default AirbnbOptions;


const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 50px;
   max-width: 1800px;
   margin: 0 auto;
   text-align: center;

   @media screen and (max-width: 950px){
     justify-content: space-evenly;
   }
`

const AirbnbLogoContainer = styled.div`
   img{
       width: 120px;
       height: 40px;
       cursor: pointer;
   }
`

const TravelsOptions = styled.div`
   display: flex;
   justify-content: center;
   text-align: center;
   margin-left: 100px;
   padding-bottom: 15px;

   

   @media screen and (max-width: 950px){
     position: absolute;
     margin-top: 70px;
     display: flex;
     margin: 0 auto;
     justify-content: center;
     align-items: center;
     margin-top: 100px;
     
   }

   @media screen and (max-width: 600px){
     display: none;
   }

   p{
       padding: 18px;
       position: relative;
       margin-left: 10px;
       color: black;
       font-size: 16px;
       font-weight: 400;
       cursor: pointer;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
       @media screen and (max-width: 950px){
         padding: 10px;
       }
       &:after{
           content: "";
           height: 2px;
           background-color: #222222;
           position: absolute;
           left: 0;
           right: 0;
           bottom: 5px;
           transform: scaleX(0);
           opacity: 0;
       }

       &:hover{
         &:after{
             opacity: 1;
             transform: scaleX(0.2);
             transition: all 1s;
         }
       }
       
    
   }
`

const ButtonsOptions = styled.div`
   display: flex;
   align-items: center;

   img{
       width: 27px;
       height: 27px;
   }

   p{
       font-size: 15.8px;
       font-weight: 400;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
`

const AnfitrionOptions = styled.div`
   display: flex;
   align-items: center;
   margin-right: 15px;
   
   p{
     margin-right: 12px;
     padding: 12px;
     border-radius: 25px;
     cursor: pointer;
     font-weight: 500;
     font-size: 14px;

     &:hover{
       background-color: #FFFFFF;
       transition: all 0.8s;
     }
   }

   img{
     cursor: pointer;
     border-radius: 23px;
     width: 42px;
     height: 42px;
     padding: 9px;

     &:hover{
        background-color: #FFFFFF;
        transition: all 0.8s;
     }
   }
`

const UserLogo = styled.div`
   display: flex;
   padding: 5px;
   border-radius: 25px;
   background-color: #FFFFFF;
   cursor: pointer;

   &:hover{
    -webkit-box-shadow: 1px 18px 98px -14px rgba(0,0,0,1);
    -moz-box-shadow: 1px 18px 98px -14px rgba(0,0,0,1);
    box-shadow: 1px 18px 98px -14px rgba(0,0,0,1);
    transition: all 1s;
   }
   

   img{
       margin: 3px;
   }
`
