import React  from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
  
import AllRoute from "./AllRoutes/AllRoute";

function App() {
  return <div className="App">
    <div style={{paddingBottom:"70px"}} >
    <Navbar/>
    </div>
 
    <AllRoute/>
    <div style={{paddingTop:"50px"}}>
    <Footer/>
    </div>

  </div>;
}

export default App;
