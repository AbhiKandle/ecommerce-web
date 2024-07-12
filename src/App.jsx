import React from "react";
import Allroutes from "./Components/Allroutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
