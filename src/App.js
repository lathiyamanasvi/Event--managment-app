import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import EventDetailsPage from './page/EventDetailsPage';
import EditEventPage from './component/Event/EditEventForm';
import ProfilePage from './page/ProfilePage';
import HomePage from './page/HomePage';
import EditEventForm from './component/Event/EditEventForm';
import DeleteEvent from './component/Event/DeleteEvent';
import CreateEventPage from './page/CreateEventPage';
// import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/event/:id/edit" element={<EditEventPage />} />
        <Route path="/event/:id/delete" element={<DeleteEvent />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* s */}
      </Routes>
    </Router>
  );
};

export default App;
