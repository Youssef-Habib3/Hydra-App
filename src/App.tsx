import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import

const App = () => {
  return (
    <Router>
      <div className="max-w-[100vw] min-h-[100vh] bg-gradient-to-r from-[#28233a] to-[#433D60]">
        <div className="container mx-auto px-6 md:px-0">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
