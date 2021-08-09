import Header from "./Header"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"



{fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))}



const Components = () => 

          <>
          <Header/>  
          <ItemListContainer nombre="Pedro " apellido="Picapiedra"  />
          <ItemDetailContainer/>
        </>

export default Components


