import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllListings from "./pages/AllListings";
import Signup from "./pages/Signup";

function App() {
  // const [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/alllistings" element={<AllListings />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
