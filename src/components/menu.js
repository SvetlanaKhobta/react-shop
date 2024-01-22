
import { useState } from "react";
import Buttons from "./buttons";
import Dishes from "./dishes";
import { data }  from '../data/data'



function Menu(){
    const [dishes, setDishes] = useState(data);
    return(
        <div>
        
            <Buttons
                data = {data}
                setDishes={setDishes}
            />
            <Dishes dish={dishes} />
         
        </div>
    )
}
export default Menu;