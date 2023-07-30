import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PlanetsPage from "./pages/PlanetsPage";
import SpaceshipsPage from "./pages/SpaceshipsPage"
import VehiclesPage from "./pages/VehiclesPage"
import PeoplePage from "./pages/PeoplePage";
import FilmsPage from "./pages/FilmsPage"
import DetailsPage from "./pages/DetailsPage";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/planets" element={<PlanetsPage />}/>
        <Route path="/spaceships" element={<SpaceshipsPage />} />
        <Route path="/vechicles" element={<VehiclesPage/>} />
        <Route path="/people" element={<PeoplePage/>} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
