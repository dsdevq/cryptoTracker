import { CryptoList } from "./components/CryptoList";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="min-h-full flex flex-col bg-slate-400">
      <NavBar />
      <CryptoList />
      {/* <footer>Footer</footer> */}
    </div>
  );
}

export default App;
