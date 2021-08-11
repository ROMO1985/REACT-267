import React , {useEffect,useState} from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const productosInit = [
    { id: 1, title: "Producto 1", description: "Lorem Ipsum", price: 100 , pictureUrl : "http://placehold.it/500x300" , categoria : "1" },
    { id: 2, title: "Producto 2", description: "Lorem Ipsum", price: 200 , pictureUrl : "http://placehold.it/500x300" , categoria : "2" },
    { id: 3, title: "Producto 2", description: "Lorem Ipsum", price: 200 , pictureUrl : "http://placehold.it/500x300" , categoria : "2" },
    { id: 4, title: "Producto 2", description: "Lorem Ipsum", price: 200 , pictureUrl : "http://placehold.it/500x300" , categoria : "2" }

  ]


const ItemListContainer = ({greeting}) =>{

  const params = useParams()
  console.log( params)
 
  const [items, setItems] = useState([])

  
  useEffect(() => {

    const promesa = getItem()
    promesa.then(json=>{
        setItems(json)
    })

}, [])

const getItem = () => {


    const promesa = new Promise((res,rej)=>{
        setTimeout(() => {

            if(params.id){
                res(productosInit.filter(producto=>producto.id == params.id))
            }
            else{
                res(productosInit)
            }
        }, 2000)
    })
    return promesa
}
  
  

    return(
    <body>    
       <div>
       <ItemCount stock = {5}  initial = {1} ondAdd={(cantidad)=>{ alert("la cantidad comprada es " +cantidad) }}/>
        
        <ItemList items={items}/>
        </div>
    </body>
    )
    
  }

export default ItemListContainer