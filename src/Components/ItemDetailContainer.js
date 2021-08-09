import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail"

const init = { id:1 , title:"PRODUCTO",  description:"PRODUCTO PRODUCTAZO PRODUCTECA PRODUCTAZA ", price:100, pictureUrl: "https://place-hold.it/300x500"}

const ItemDetailContainer = ()=>{

        const [Items, setItem] = useState (false)

        useEffect(()=>{

            const promise = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                  resolve(Items)
                },2000)
              })

              promise.then ( Items=>(setItem(init)))
            },[])

            return (
                <div>
                    <p>Detalle Item</p>
                    <ItemDetail Items = {Items}/>
                </div>
            )
        }

export default ItemDetailContainer



