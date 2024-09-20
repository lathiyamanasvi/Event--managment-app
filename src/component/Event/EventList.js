import React from 'react';
import { useEvent } from '../../hooks/useEvent';
import { Link } from 'react-router-dom';
import './Event.css'; 

const EventList = () => {
  const { getEvents } = useEvent();
  const events = getEvents();

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Event List</h2>
      <div className="row">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <div className="card event-card shadow-sm">
                <img src={event.image} className="card-img-top event-img" alt={event.title} />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="card-text"><strong>Date:</strong> {event.date}</p>
                  <p className="card-text"><strong>Location:</strong> {event.location}</p>
                  <Link to={`/event/${event.id}`} className="btn btn-primary event-btn">View Details</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col">
            <p className="text-center">No events available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;
