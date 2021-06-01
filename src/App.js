import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Reastrauntcreate from "./Components/Reastrauntcreate";
import RestaurantUpdate from "./Components/RestaurantUpdate";
import RestaurantsLists from "./Components/RestaurantsLists";
import RestaurantsSearch from "./Components/RestaurantsSearch";
import RestrauntDetails from "./Components/RestrauntDetails";
import UserLogin from "./Components/UserLogin";
import Reservations from "./Components/Reservations";
import NavBar from "./Components/Navbar";
import Add from "./Components/Add";
import Sab from "./sab";

import Aboutus from "./Components/Aboutus";
import FormikReservations from "./Components/FormikReservations";


function App() {
  return (
    <div className="App">
      <Router history={true}>
        <Route path="/list">
          <RestaurantsLists />
        </Route>
        <Route path="/create">
          <Reastrauntcreate />
        </Route>
        <Route path="/search">
          <RestaurantsSearch />
        </Route>
        <Route path="/details">
          <RestrauntDetails />
        </Route>
        <Route path="/aboutus">
          <Aboutus />
        </Route>
        <Route
          path="/update/:id"
          render={(props) => <RestaurantUpdate {...props} />}
        ></Route>
        <Route exact path="/" render={(props) => <UserLogin {...props} />}></Route>

        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Reservations">
          <FormikReservations />
        </Route>
        <Route path="/Add">
          <Add />
        </Route>
        <Route path="/Sab">
          <Sab/>
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
