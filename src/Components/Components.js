import Header from "./Header"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import {
      BrowserRouter as Router,
      Switch,
      Route,
    } from "react-router-dom";


const Components = () => {
      return(
          <>
          <Router>
          <Header/>  
          <Switch>
            <Route path="/1" component={ItemDetailContainer} />    
             
            <Route path="/" component={ItemListContainer} />
            <Route path="/cart" component = "" exact /> 

          </Switch>
          </Router>

        </>
            )}
export default Components


