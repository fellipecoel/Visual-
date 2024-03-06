import Logo2 from '../../images/logo2.png';
import Logo3 from '../../images/logo3.jpg';
import Logo4 from '../../images/logo4.jpg';
import Perfil from '../Perfil/Perfil';
import Equipe from '../Equipe/Equipe';
import './Main.css';
import img from '../../images/img.jpg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpg';

const Main = () => {
    return(
      <main>
       <Equipe titulo={'Homem de Ferro'} img1={Logo2} nome1={"Mark43"} img2={Logo3} nome2={"Mark7"}  img3={Logo4} nome3={"Coração"}/>

       <Equipe titulo={'Os vingadores'} img1={img} nome1={"Os vingadores"} img2={img2} nome2={"Os vingadores2"} img3={img3} nome3={"Equipe"}/>
      
       

       
      </main>
    )
}

export default Main;