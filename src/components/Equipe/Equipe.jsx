import Logo2 from '../../images/logo2.png';
import Logo3 from '../../images/logo3.jpg';
import Logo4 from '../../images/logo4.jpg';
import Perfil from '../Perfil/Perfil';
import img from '../../images/img.jpg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpg';

const Equipe = (props) => {
    return(
        <>
          <h1 className='t-center'>{props.titulo}</h1>
        <div className='perfis'>
         <Perfil img={props.img1} titulo={props.nome1}/>
         <Perfil img={props.img2} titulo={props.nome2}/>
         <Perfil img={props.img3} titulo={props.nome3}/>
      </div>

   
        </>
    )
}

export default Equipe;