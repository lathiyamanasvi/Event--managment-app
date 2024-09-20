import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvent } from '../hooks/useEvent';
import '../App.css'

const CreateEventPage = () => {
  const { createEvent } = useEvent();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    maxAttendees: 0,
    image: null,
  });

  const handleCreateEvent = () => {
    createEvent(eventData);
    navigate('/');
  };

  return  (
    <div className="container">
      <header className="header text-center">
        <h1>Create New Event</h1>
        <p>Thank you for helping us improve the platform!</p>
      </header>
      
      <div className="form-wrap">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="title">Event Title</label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  placeholder="Enter event title"
                  value={eventData.title}
                  onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="date">Event Date</label>
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  value={eventData.date}
                  onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="location">Event Location</label>
                <input
                  type="text"
                  id="location"
                  className="form-control"
                  placeholder="Enter event location"
                  value={eventData.location}
                  onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="maxAttendees">Max Attendees</label>
                <input
                  type="number"
                  id="maxAttendees"
                  className="form-control"
                  placeholder="Enter max attendees"
                  value={eventData.maxAttendees}
                  onChange={(e) => setEventData({ ...eventData, maxAttendees: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Event Description</label>
            <textarea
              id="description"
              className="form-control"
              rows="4"
              placeholder="Enter event description"
              value={eventData.description}
              onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="image">Upload Event Image</label>
            <input
              type="file"
              id="image"
              className="form-control"
              onChange={(e) => setEventData({ ...eventData, image: e.target.files[0] })}
            />
          </div>

          <div className="row">
            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={handleCreateEvent}
              >
                Create Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default CreateEventPage;
