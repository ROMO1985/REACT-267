import {useState} from "react"
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import "./estilos.css"

const ItemCount = ({stock, initial, ondAdd}) => {
const carrito ="" 
const [contador = initial, setContador] = useState(initial)
const sumarContador = () => {
  
    if( stock > contador){
    setContador (contador + 1)
    }else{ ( setContador (contador))
    }

}

const restarContador = () => {
       
    if( contador === 0){
        setContador ( contador) 
        }else{ ( setContador (contador -1 ))
        }
    

}

const confirm = () =>{
    ondAdd(contador)

}



return (
<>
<Container>


               
                <Button variant="outline-danger" onClick = { restarContador}  >- </Button>{' '}
                <em>  {contador} </em> 
                <Button variant="outline-success" onClick = { sumarContador}  >+ </Button>{' '}
                
                <Button variant="warning" onClick = { confirm}  >AGREGAR </Button>{' '}

</Container>
</>            

)

}


export default ItemCount