import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/listing';
import Form from 'pages/form';
import Navbar from "components/Navbar";
import Footer from "components/Footer"
import CreateMovie from 'pages/created';

function App() {
  return (
    <BrowserRouter>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
        <Route path="/form/created" element={<CreateMovie />} />
        <Route path=":movieId" element={<Form />} />
          
        </Route>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
