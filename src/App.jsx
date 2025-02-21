
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CreateBlog from "./pages/CreateBlog";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createblog" element={<CreateBlog />} />
      </Routes>

      <Footer/>

    </>
  )
}

export default App
