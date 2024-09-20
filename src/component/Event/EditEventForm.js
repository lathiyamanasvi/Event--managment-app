import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEvent } from '../../hooks/useEvent';

const EditEventForm = () => {
  const { id } = useParams(); // Get the event ID from URL
  const { getEventById, updateEvent } = useEvent();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    maxAttendees: 0,
    image: null,
  });

  useEffect(() => {
    const event = getEventById(id);
    if (event) {
      setEventData(event);
    }
  }, [id, getEventById]);

  const handleUpdateEvent = () => {
    const updatedEvent = { ...eventData, id: parseInt(id) }; // Ensure ID stays the same
    updateEvent(id, updatedEvent); // Update event in local storage
    navigate(`/event/${id}`); // Navigate to the event details page
  };

  return (
    <div>
      <h2>Edit Event</h2>
      <input
        type="text"
        placeholder="Title"
        value={eventData.title}
        onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={eventData.description}
        onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
      />
      <input
        type="date"
        value={eventData.date}
        onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={eventData.location}
        onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
      />
      <input
        type="number"
        placeholder="Max Attendees"
        value={eventData.maxAttendees}
        onChange={(e) => setEventData({ ...eventData, maxAttendees: e.target.value })}
      />
      <input
        type="file"
        onChange={(e) => setEventData({ ...eventData, image: e.target.files[0] })}
      />
      <button onClick={()=>handleUpdateEvent()}>Update Event</button>
    </div>
  );
};

export default EditEventForm;
