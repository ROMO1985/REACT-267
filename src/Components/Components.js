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
          <Route path="/1" component={ItemListContainer} exact/>
          <Route path="/2" component={ItemDetailContainer} />    
                           

          </Switch>
          </Router>

        </>
            )}
export default Components


