export const useEvent = () => {
  const createEvent = (eventData) => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push({ ...eventData, id: new Date().getTime() }); // Assign unique ID
    localStorage.setItem('events', JSON.stringify(events));
  };

  const getEvents = () => {
    return JSON.parse(localStorage.getItem('events')) || [];
  };

  const getEventById = (id) => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    return events.find((event) => event.id === parseInt(id)); // Find event by ID
  };

  const updateEvent = (id, updatedEvent) => {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events = events.map((event) => (event.id === parseInt(id) ? updatedEvent : event));
    localStorage.setItem('events', JSON.stringify(events)); // Save updated events to local storage
  };

  const deleteEvent = (id) => {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events = events.filter((event) => event.id !== parseInt(id)); // Remove event by ID
    localStorage.setItem('events', JSON.stringify(events)); // Save updated event list
  };

  return { createEvent, getEvents, getEventById, updateEvent, deleteEvent };
};
