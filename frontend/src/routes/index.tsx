import { Route, Routes } from "react-router-dom"
import Listing from '../pages/listing';
import Form from '../pages/form';
import CreateMovie from '../pages/created';
import Details from '../pages/details'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/form/:movieId" element={<Form />} />
            <Route path="details" element={<Details />} />
            <Route path="created" element={<CreateMovie />} />
        </Routes>
    )
}

export default Router;