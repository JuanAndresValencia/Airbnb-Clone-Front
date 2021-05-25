import CovidAnuncio from '../components/covidAnuncio'
import SubHeader from '../components/SubHeader'
import { DateRange } from 'react-date-range'

const Header = () => {
  return (
    <div>
      <CovidAnuncio />
      <SubHeader />
    </div>
  )
}

export default Header;
