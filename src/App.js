import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "routes/home";
import CountryDetail from "routes/countryDetail";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={ <HomePage />}
            />
          <Route path="/:country" element={<CountryDetail />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
