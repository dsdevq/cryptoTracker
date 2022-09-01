import { Card } from "./components/Card";
import { CryptoList } from "./components/CryptoList";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="min-h-full flex flex-col bg-slate-400">
      <NavBar />
      <CryptoList />
      <Card />
    </div>
  );
}

export default App;
