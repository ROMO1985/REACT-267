import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
/*  
A)Crea un componente CartWidget.js con un ícono, y ubícalo en el navbar. 
B)Agrega algunos estilos con bootstrap/materialize u otro.
 Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.
>>Aspectos a incluir en el entregable:
Parte 1: crea un componente CartWidget.js que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.
Parte 2: crea un componente ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js. 
 */


const Components = () => 
        <>
            
          <Header/>  
          <ItemListContainer nombre="Pedro " apellido="Picapiedra"/>
        </>

export default Components


