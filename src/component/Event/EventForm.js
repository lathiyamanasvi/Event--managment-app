import React, { useState } from 'react';
import { useEvent } from '../../hooks/useEvent';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    maxAttendees: 0,
    image: null,
  });

  const { createEvent } = useEvent();

  const handleCreateEvent = () => {
    createEvent(eventData);
  };

  return (
    <div>
      <h2>Create Event</h2>
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
      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
};

export default EventForm;
