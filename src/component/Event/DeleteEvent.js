import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEvent } from '../../hooks/useEvent';

const DeleteEvent = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const { deleteEvent, getEventById } = useEvent();
  const navigate = useNavigate();

  const event = getEventById(id); // Fetch the event by ID

  const handleDelete = () => {
    deleteEvent(id); // Delete event from local storage
    navigate('/'); // Navigate to the home page after deletion
  };

  return (
    <div>
      <h2>Delete Event</h2>
      {event ? (
        <>
          <p>Are you sure you want to delete the event "{event.title}"?</p>
          <button onClick={handleDelete}>Yes, Delete</button>
          <button onClick={() => navigate(-1)}>Cancel</button>
        </>
      ) : (
        <p>Event not found.</p>
      )}
    </div>
  );
};

export default DeleteEvent;
