export const useEvent = () => {
    const createEvent = (eventData) => {
      const events = JSON.parse(localStorage.getItem("events")) || [];
      events.push({ ...eventData, id: new Date().getTime() });
      localStorage.setItem("events", JSON.stringify(events));
    };
  
    const getEvents = () => {
      return JSON.parse(localStorage.getItem("events")) || [];
    };
  
    return { createEvent, getEvents };
  };
  