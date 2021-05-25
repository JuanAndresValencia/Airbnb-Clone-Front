import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { DateRange } from 'react-date-range'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb: alojamientos vacacionales, cabañas...</title>
        <link rel='shortcut icon' href='/images/favicon.ico' />
      </Head>

      <Header />
      <Nav />
      <Footer />
      

      
    </div>
  )
}
