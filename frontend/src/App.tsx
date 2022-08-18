import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
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
