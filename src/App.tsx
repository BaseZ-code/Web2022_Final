import { Route, Routes } from "react-router-dom";
import { HotelPage } from "./pages/hotel/HotelPage";
import { NotFound } from "./pages/NotFound";
import Reservation from "./pages/reservation/Reservation";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<HotelPage />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
