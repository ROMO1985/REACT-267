import ItemCount from "./ItemCount"

const ItemListContainer = ({nombre,apellido}) =>
    
    <nav>    
       
        <p>Nombre del Usuario: {nombre} - Apellido del Usuario: {apellido}   </p>
        <ItemCount stock = {5}  initial = {1} ondAdd={(cantidad)=>{ console.log(cantidad) }}/>
    </nav>

export default ItemListContainer