import { GiToaster } from "react-icons/gi";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import LocationList from "./components/LocationList/LocationList.jsx";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import Hotels from "./components/Hotels/Hotels.jsx";
import HotelsProvider from "./components/context/HotelProvider.jsx";
import SingleHotel from "./components/SingleHotel/SingleHotel.jsx";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout.jsx";
import BookmarkListProvider from "./components/context/BookmarkListContext.jsx";
import Bookmark from "./components/Bookmark/Bookmark.jsx";
import SingleBookmark from "./components/SingleBookmark/SingleBookmark.jsx";
import AddNewBookmark from "./components/AddNewBookmark/AddNewBookmark.jsx";

function App() {
  return (
    <BookmarkListProvider>
      <HotelsProvider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
            <Route path="bookmark" element={<BookmarkLayout />} />
            <Route index element={<Bookmark />} />
            <Route path=":id" element={<SingleBookmark />} />
            <Route path="add" element={<AddNewBookmark />} />
          </Route>
        </Routes>
      </HotelsProvider>
    </BookmarkListProvider>
  );
}

export default App;
