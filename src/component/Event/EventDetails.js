import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEvent } from '../hooks/useEvent';
import './Event.css'; // Import your custom CSS file

const EventDetailsPage = () => {
  const { id } = useParams();
  const { getEventById } = useEvent();
  const event = getEventById(id);

  return (
    <div className="container my-4">
      {event ? (
        <div className="card event-details-card shadow-lg">
          <div className="card-body">
            <h1 className="card-title">{event.title}</h1>
            <p className="card-text"><strong>Description:</strong> {event.description}</p>
            <p className="card-text"><strong>Date:</strong> {event.date}</p>
            <p className="card-text"><strong>Location:</strong> {event.location}</p>
            <p className="card-text"><strong>Max Attendees:</strong> {event.maxAttendees}</p>
            <div className="d-flex justify-content-between">
              <Link to={`/event/${id}/edit`} className="btn btn-warning btn-lg animate-btn">Edit Event</Link>
              <Link to={`/event/${id}/delete`} className="btn btn-danger btn-lg animate-btn">Delete Event</Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Event not found</p>
      )}
    </div>
  );
};

export default EventDetailsPage;
