import React from 'react';
import EventList from '../component/Event/EventList';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import"../App.css"

const HomePage = () => {
  return (
    <Box className="homepage-container" display="flex" flexDirection="column" alignItems="center">
      {/* Page Header */}
      <Card className="header-card shadow-lg">
        <CardContent>
          <Typography variant="h3" component="h1" className="text-center mb-4" color="primary">
            Upcoming Events
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary">
            Discover the latest events happening near you and never miss out!
          </Typography>
        </CardContent>
      </Card>

      {/* Event List Section */}
      <Box className="event-list-container container mt-5">
        <EventList />
      </Box>

      {/* Create Event Button */}
      <Box mt={4}>
        <Link to="/create-event" className="create-event-link">
          <Button variant="contained" color="primary" size="large">
            Create New Event
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
