import { Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import { UserProvider } from "./contexts/UserContext";
import Login from "./components/Login";
import CreateEvent from "./components/CreateEvent";

export default function App() {
  return (
    <UserProvider>
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
          <Route path="/login" element={<Login />} />
          <Route path="/user/host" element={<CreateEvent />} />
        </Routes>
      </div>
    </UserProvider>
  );
}
