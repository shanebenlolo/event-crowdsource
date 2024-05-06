import { Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./Events";
import Header from "./Header";
import Hero from "./Hero";
import EventDetails from "./EventDetails";

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Events />
            </>
          }
        />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
    </div>
  );
}
