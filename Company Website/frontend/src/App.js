import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<AppRoutes />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
