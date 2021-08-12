import React from "react"
import Item from "./Item"
import { Link} from "react-router-dom";
import ItemCount from "./ItemCount";
const ItemList = ({items}) => {
  return ( 
      <div id="item-list">
          {items.map(item=>{
              return (
                  <li>  
                  <Link to={`/${item.id}`}>PRODUCTO CON ID: {item.id}</Link>
                  <Item key={item.id} item={item}/>
                  <ItemCount stock = {5}  initial = {1} ondAdd={(cantidad)=>{ alert("la cantidad comprada es " +cantidad) }}/>
                  </li>
              )
          })}
      </div>
   );
}


export default ItemList