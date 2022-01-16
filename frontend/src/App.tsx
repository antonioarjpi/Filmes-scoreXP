import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer"
import Router from './routes'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />            
      <Footer />
    </BrowserRouter>
  );
}

export default App;
