import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import MapView from "./components/MapView";
import { useState } from "react";

function App() {
const [user, setUser] = useState(null);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login setUser={setUser} />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/mapview" element={<MapView/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
