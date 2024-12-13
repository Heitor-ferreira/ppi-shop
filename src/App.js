import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Index";
import Checkout from "./components/Favorite";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="header-position">
      <Header />
      </div>
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/favorite" element={<Checkout />}/>
      </Routes>
    </ContextProvider>
  );
}

export default App;
