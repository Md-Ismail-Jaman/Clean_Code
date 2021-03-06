import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import Details from './components/ProductDetails/Details';



function App() {
  // className="App"
  return (
    <div >
     <Router>
     <Header></Header>
    <Switch>
      <Route path="/shop">
      <Shop></Shop>
      </Route>
      <Route path="/review">
    <Review></Review>
      </Route>
      <Route path="/manage">
    <Manage></Manage>
      </Route>
      <Route exact path="/">
      <Shop></Shop>
      </Route>
      <Route path="/product/:productKey">
          <Details></Details>
      </Route>
    <Route path="*">
      <NotFound></NotFound>
    </Route>
    </Switch>


     </Router>
     
    </div>
  );
}

export default App;
