import { GiToaster } from "react-icons/gi";
import {Toaster} from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import LocationList from "./components/LocationList/LocationList.jsx";
import { Route,Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import Hotels from "./components/Hotels/Hotels.jsx";
import HotelsProvider from "./components/context/HotelProvider.jsx";
import SingleHotel from "./components/SingleHotel/SingleHotel.jsx";



function App() {
  return (
    <HotelsProvider>
      <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />}>
          <Route index element={<Hotels />} />
          <Route path=":id" element={<SingleHotel />} />
          </Route>
        </Routes>
    </HotelsProvider>
  )
}

export default App