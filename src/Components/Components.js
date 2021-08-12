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
            <Route path="/categoria/2" component={ItemDetailContainer} exact/>    
            <Route path="/" component={ItemListContainer} />

            <Route path="/categoria/:id" component={ItemListContainer} />
                           

          </Switch>
          </Router>

        </>
            )}
export default Components


