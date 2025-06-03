import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
