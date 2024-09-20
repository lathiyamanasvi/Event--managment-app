import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEvent } from '../hooks/useEvent';

const EventDetailsPage = () => {
  const { id } = useParams();
  const { getEventById } = useEvent();
  const event = getEventById(id);

  return (
    <div>
      {event ? (
        <>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p>Max Attendees: {event.maxAttendees}</p>
          <Link to={`/event/${id}/edit`}>Edit Event</Link>
          <Link to={`/event/${id}/delete`}>Delete Event</Link>
        </>
      ) : (
        <p>Event not found</p>
      )}
    </div>
  );
};

export default EventDetailsPage;
