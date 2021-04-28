import tourss from "./Data";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import AddTour from "./components/AddTour";
import ToursList from "./components/ToursList";
import TourDetails from "./components/TourDetails";
import Slider from "./components/Slider";
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [tours, setTours] = useState(tourss);
  const [searchByName, setSearchByName] = useState("");

  const addTo = (newTour) => {
    setTours([...tours, newTour]);
  };

  const filteredList = tours.filter((tour) =>
  tour.name.toUpperCase().includes(searchByName.toUpperCase())
  );

  return (
    <div className="App">
      <NavBar setSearchByName={setSearchByName} searchByName={searchByName} />
      <Route exact path="/" render={() =><Slider />} />
      <Route
        path="/tours"
        render={() => (
          <ToursList tours={filteredList} />
        )}
      />
      <Route path="/AddTour" render={() => <AddTour addTo={addTo} />} />
      <Route
        path="/TourDetails/:idTour"
        render={(props) => <TourDetails tours={tours} {...props} />}
      />

    </div>
  );
}

export default App;
