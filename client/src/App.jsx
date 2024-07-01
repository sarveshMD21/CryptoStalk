import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ComparePage from "./Pages/ComparePage";
import CoinPage from "./Pages/CoinPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CoinDisplay from "./Pages/CoinDisplay";
import { useDispatch } from "react-redux";
import { cryptoAction } from "./redux/crypto-slice";
import axios from "axios";

function App() {
  
  const dark=useSelector((state)=>state.toggle.dark);

  const dispatch=useDispatch();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
   
  useEffect(()=>{
    const getData=async ()=>{
      const options = {
        url: `${import.meta.env.VITE_API_BASE_URL}/coins?limit=1500`,
              params: {
                  timePeriod: '1h',
                },
              headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': import.meta.env.VITE_API_HOST
              }
      };
      try{
        const response = await axios.request(options);
        const payload={
          coins:response.data.data.coins
        }
       // console.log(payload.coins);
        dispatch(cryptoAction.setCoinData(payload));
       
       
      }catch(error){
        console.log(error);
      }
    }
    getData();
  })

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
