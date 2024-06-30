import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ComparePage from "./Pages/ComparePage";
import CoinPage from "./Pages/CoinPage";
import NewsPage from "./Pages/NewsPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CoinDisplay from "./Pages/CoinDisplay";

function App() {
  
  const dark=useSelector((state)=>state.toggle.dark);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
   
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/coins" element={<CoinPage/>}>
       </Route>
       
       <Route path="/compare" element={<ComparePage/>}>
       </Route>
       <Route path="/:id" element={<CoinDisplay/>}>
       </Route>
    </Routes>
  </Router>
  )
}

export default App
