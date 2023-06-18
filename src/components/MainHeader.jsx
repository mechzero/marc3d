import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="main__header-container">
          <div className="main__header-left">
            <h4>#100DaysOfPrototyping</h4>
            <h1>Bring Your Idea To Life With 3D Printing</h1>

            <p>
            The moonlit whispers revealed secrets untold, as the stars danced to the rhythm of forgotten tales.
            </p>
            <Link to="/plans/" className='btn lg' >Get Started</Link>

            </div>
            <div className="main__header-right">
               <div className="main__header-circle"></div>
            <div className="main__header-image">
                <img src={Image} alt="Main Header Image"/>
            </div>
            </div>
            </div>
      </header>
  )
}

export default MainHeader