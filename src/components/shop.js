import '../App.css';
import Image from 'react-bootstrap/Image';
import imgCook from '../images/povar.jpg'

function Shop(){
    return(
        <div>
        <div className='header'>
            <h1>Ресторан у  вас дома</h1>
            <h3>Мы готовим, вы отдыхаете</h3>
       </div>
       <div>
            <Image src={imgCook} fluid />
       </div>
           </div>
    )
}
export default Shop;

