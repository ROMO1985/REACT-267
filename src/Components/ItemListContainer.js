import React , {useEffect,useState} from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const productosInit = [
    { id: 1, title: "Producto 1", description: "Lorem Ipsum", price: 100 , pictureUrl : "http://placehold.it/500x300" , categoria : "1" , stock:4},
    { id: 2, title: "Producto 2", description: "Lorem Ipsum", price: 200 , pictureUrl : "http://placehold.it/500x300" , categoria : "2", stock:  3},
    { id: 3, title: "Producto 2", description: "Lorem Ipsum", price: 200 , pictureUrl : "http://placehold.it/500x300" , categoria : "2", stock:  5 },
    { id: 4, title: "Producto 2", description: "Lorem Ipsum", price: 200 , pictureUrl : "http://placehold.it/500x300" , categoria : "2", stock:  7} ]


const ItemListContainer = () =>{

 
  const [items, setItems] = useState([])
  const params = useParams()
  
  useEffect(() => {

    const promesa = getItem()
    promesa.then(json=>{
        setItems(json)
    })

}, [])

const getItem = () => {


    const promesa = new Promise((res,rej)=>{
        console.log( params)
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
        
        <ItemList items={items}/>
        </div>
    </body>
    )
    
  }

export default ItemListContainer