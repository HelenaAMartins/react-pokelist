import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Types from "./pages/Types";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/type/:type" element={<Types />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
