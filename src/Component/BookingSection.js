import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';

const DatePicker = ({ label, selected, onChange, minDate, required }) => (
  <div>
    <InputLabel>{label}</InputLabel>
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      minDate={minDate}
      className="border rounded-xl px-3 py-2 w-full"
      placeholderText={`Select ${label.toLowerCase()}`}
      required={required}
    />
  </div>
);

export default function BookingSection() {
  const [formData, setFormData] = useState({
    checkIn: null,
    checkOut: null,
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    numberOfGuests: '',
    roomType: '',
    additionalInfo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      // Automatically select room type based on number of guests
      if (name === 'numberOfGuests' && parseInt(value, 10) > 4) {
        if (!['Non-AC Suite', 'AC Suite'].includes(updatedData.roomType)) {
          updatedData.roomType = 'AC Suite';
        }
      }

      return updatedData;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.checkIn) {
      alert('Please select a check-in date.');
      return;
    }
    if (!formData.checkOut) {
      alert('Please select a check-out date.');
      return;
    }

    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="UserInput">
      <form onSubmit={handleSubmit} className="space-y-4 bg-blue-50 p-6 rounded-xl">
        <div className="Date">
          <DatePicker
            label="Check-In Date"
            selected={formData.checkIn}
            onChange={(date) => setFormData({
              ...formData,
              checkIn: date,
              checkOut: formData.checkOut && formData.checkOut < date ? null : formData.checkOut,
            })}
            required
          />
          <DatePicker
            label="Check-Out Date"
            selected={formData.checkOut}
            onChange={(date) => setFormData({ ...formData, checkOut: date })}
            minDate={formData.checkIn}
            required
          />
        </div>

        <div className='textFeild'>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <TextField
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
          <FormControl>
            <InputLabel>Gender</InputLabel>
            <Select name="gender" value={formData.gender} onChange={handleChange}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <FormControl>
            <InputLabel>Number of Guests</InputLabel>
            <Select name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange}>
              {[...Array(6).keys()].map((num) => (
                <MenuItem key={num + 1} value={num + 1}>{num + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Room Type</InputLabel>
            <Select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              disabled={parseInt(formData.numberOfGuests, 10) > 4 && !['Non-AC Suite', 'AC Suite'].includes(formData.roomType)}
            >
              <MenuItem value="Standard Room" disabled={parseInt(formData.numberOfGuests, 10) > 4}>Standard Room</MenuItem>
              <MenuItem value="Deluxe Room" disabled={parseInt(formData.numberOfGuests, 10) > 4}>Deluxe Room</MenuItem>
              <MenuItem value="AC Standard Room" disabled={parseInt(formData.numberOfGuests, 10) > 4}>AC Standard Room</MenuItem>
              <MenuItem value="Super Deluxe Room" disabled={parseInt(formData.numberOfGuests, 10) > 4}>Super Deluxe Room</MenuItem>
              <MenuItem value="Non-AC Suite">Non-AC Suite</MenuItem>
              <MenuItem value="AC Suite">AC Suite</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Additional Information"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Any special requests or information?"
            multiline
            rows={4}
            fullWidth
          />
        </div>
        <div className='submitButton'>
          <Button variant="contained" color="primary" type="submit">
            Book Now
          </Button>
        </div>
      </form>
    </div>
  );
}
