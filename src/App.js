import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PlanetsPage from "./pages/PlanetsPage";
import SpaceshipsPage from "./pages/SpaceshipsPage"
import VehiclesPage from "./pages/VehiclesPage"
import PeoplePage from "./pages/PeoplePage";
import FilmsPage from "./pages/FilmsPage"
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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
