import Logo from '../../images/logo.png'
import './Heade.css';
const Header = () => {
    return(
        <header className='menu'>
        <img src={Logo} ></img>
        <h1>Exibe Pefil</h1>
      </header>
    )
}

export default Header;