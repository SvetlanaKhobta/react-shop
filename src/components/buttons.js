import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Buttons({data, setDishes}){
    const filteredDishes = searchTerm => {
        const filteredResult = [];
        data.forEach( item => {
            item.searchTerm.forEach( term => {
                if( term === searchTerm) {
                    filteredResult.push(item);
                    setDishes(filteredResult)
                }
            })
        })
    }
    return(

            <div  className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
        <Button variant="outline-dark"  onClick={() => setDishes(data)}>Посмотреть все</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("pasta")}>Паста</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("fish")} >Рыбные блюда</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("pizza")} >Пицца</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("meat")} >Блюда из говядины</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("dessert")} >Десерты</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("chiken")} >Блюда из курицы</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("sandwich")} >Сэндвичи</Button>
        <Button variant="outline-dark"onClick={() => filteredDishes("salad")} >Салаты</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("italian")}>Итальянская кухня</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("china")}>Китайская кухня</Button>
        <Button variant="outline-dark" onClick={() => filteredDishes("american")} >Американская кухня</Button>
      
</div>

    )
}
export default Buttons;










