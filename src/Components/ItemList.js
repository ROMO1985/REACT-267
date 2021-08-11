import React from "react"
import Item from "./Item"
import { Link} from "react-router-dom";
const ItemList = ({items}) => {
  return ( 
      <div id="item-list">
          {items.map(item=>{
              return (
                  <li>  
                  <Link to={`/${item.id}`}>PRODUCTO CON ID: {item.id}</Link>
                  <Item key={item.id} item={item}/>
                  </li>
              )
          })}
      </div>
   );
}


export default ItemList