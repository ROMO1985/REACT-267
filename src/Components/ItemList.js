import React from "react"
import Item from "./Item"
import { Link} from "react-router-dom"
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount"
import { render } from "@testing-library/react"
import Button from 'react-bootstrap/Button'
import { useState } from "react"

const ItemList = ({items}) => {

const [activo, setActivo] = useState ([true])

    const onAdd = (cantidad) => {
        console.log (cantidad)
        setActivo (false)
     
    }

    const registrarCompra = () =>{
        setActivo(true)
        alert("tenes tu primer compra de ID")
    }

    
  return ( 
      <div id="item-list">
          <Button  disabled={activo} size="lg" onClick = {registrarCompra}> confirmar compra</Button>

          {items.map(item=>{
              return (
                  <li>  
                  <Link to={`/${item.id}`}>PRODUCTO CON ID: {item.id}</Link>
                  <Item key={item.id} item={item}/>
                  <ItemCount stock = {item.stock}  initial = {1} ondAdd={onAdd }/>
                  </li>
              )
          })}
      </div>
   );
}


export default ItemList