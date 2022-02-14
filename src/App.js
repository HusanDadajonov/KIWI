//--ALL IMPORTS--
import Home from "./Pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import SinglePage from "./Pages/SinglePage/SinglePage";
import Search from "./Pages/Search/Search";
import Login1 from "./Pages/Home/Login1/Login1";

function App() {
   //--HOOKS--
  const [headerFormCheck,setHeaderFormCheck] = useState(true);


  return (
    <div className="App">
      
      <BrowserRouter>
        <section className="hero">
          <Header headerFormCheck={headerFormCheck}/>
        </section>
        <Routes>
          <Route path="/" element={ <Home setHeaderFormCheck={setHeaderFormCheck}/>}></Route>
          <Route path={`single/:id`} element={<SinglePage />}></Route>
          <Route path={`search/:getInpValue/:getSelectValue`} element={<Search setHeaderFormCheck={setHeaderFormCheck}/>}></Route>
          <Route path="/login1" element={<Login1 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </div>
  );
  
}

export default App;
