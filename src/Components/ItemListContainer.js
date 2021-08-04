import React , {useEffect,useState} from "react";
import ItemCount from "./ItemCount"
import {u} from "./usuarios"
import ItemList from "./ItemList"

const ItemListContainer = ({nombre,apellido}) =>{
    
    const [usuarios,setUsuarios] = useState([])
  
  useEffect(()=>{
    
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(usuarios)
      },2000)
    })

    promise.then((usuarios)=>setUsuarios(u))
  
  },[])



 return(
    <body>    
       
        <p>Nombre del Usuario: {nombre} - Apellido del Usuario: {apellido}   </p>
        <ItemCount stock = {5}  initial = {1} ondAdd={(cantidad)=>{ alert("la cantidad comprada es " +cantidad) }}/>
        <ItemList usuarios={usuarios}/>
    
    </body>)}

export default ItemListContainer