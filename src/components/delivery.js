import Image from 'react-bootstrap/Image';
import imgDelivery from '../images/delivery.jpg'


function Delivery(){
    return(
        <div>
            <h1>Доставка</h1>
            <Image src={imgDelivery} fluid />
           
        </div>
    )
}
export default Delivery;