import React from 'react';
import { Card, ListGroup, Table } from 'react-bootstrap';

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <div>No weather data available</div>;
  }

  const forecastDays = weather.forecast.forecastday;

  return (
    <div>
      <Card style={{ width: '18rem' }} className="m-auto mt-4">
        <Card.Header>{weather.location.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Temperature:</strong> {weather.current.temp_c}°C
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Condition:</strong> {weather.current.condition.text}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Wind:</strong> {weather.current.wind_kph} km/h
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Humidity:</strong> {weather.current.humidity}%
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {forecastDays.map((day, index) => (
        <Table striped bordered hover className="mt-4" key={index}>
          <thead>
            <tr>
              <th colSpan="4">{day.date}</th>
            </tr>
            <tr>
              <th>Time</th>
              <th>Temp (°C)</th>
              <th>Condition</th>
              <th>Wind (km/h)</th>
            </tr>
          </thead>
          <tbody>
            {day.hour.map((hour, index) => (
              <tr key={index}>
                <td>{hour.time.split(' ')[1]}</td>
                <td>{hour.temp_c}</td>
                <td>{hour.condition.text}</td>
                <td>{hour.wind_kph}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default WeatherDisplay;
