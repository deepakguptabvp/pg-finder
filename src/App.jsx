import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import MapView from "./components/MapView";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [user, setUser] = useState(null);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login setUser={setUser} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
