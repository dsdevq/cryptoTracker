import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Convert } from "./pages/Convert";
import { Explore } from "./pages/Explore";

function App() {
  return (
    <div className="min-h-full flex flex-col bg-slate-400">
      <NavBar />
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path='/convert' element={<Convert />} />
      </Routes>
    </div>
  );
}

export default App;
