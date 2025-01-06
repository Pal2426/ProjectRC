import Similaraud from "./components/SimlarAudience/similaraud";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/SimlarAudience/nav";
import LeadsActivity from "./components/Leads/leadsActivity";
import Ingredient from "./components/IngredientScore/Ingredient";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Similaraud />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/leads" element={<LeadsActivity/>}/>
        <Route path="/Ingredient" element={<Ingredient />} />
      </Routes>
    </>
  );
}

export default App;
