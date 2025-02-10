import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';

const DatePicker = ({ label, selected, onChange, minDate }) => (
  <div>
    <InputLabel>{label}</InputLabel>
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      minDate={minDate}
      className="border rounded-xl px-3 py-2 w-full"
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
    additionalInfo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="UserInput">
      <form onSubmit={handleSubmit} className="space-y-4 bg-blue-50 p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Hotel Booking Section</h2>
        <div className="Date">
          <DatePicker
            label="Check-In Date"
            selected={formData.checkIn}
            onChange={(date) => setFormData({
              ...formData,
              checkIn: date,
              checkOut: formData.checkOut && formData.checkOut < date ? null : formData.checkOut,
            })}
          />
          <DatePicker
            label="Check-Out Date"
            selected={formData.checkOut}
            onChange={(date) => setFormData({ ...formData, checkOut: date })}
            minDate={formData.checkIn}
          />
        </div>

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          fullWidth
          required
        />
        <TextField
          label="Age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          fullWidth
          required
        />
        <FormControl fullWidth>
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
          fullWidth
          required
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          fullWidth
          required
        />
        <FormControl fullWidth>
          <InputLabel>Number of Guests</InputLabel>
          <Select name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange}>
            {[...Array(10).keys()].map((num) => (
              <MenuItem key={num + 1} value={num + 1}>{num + 1}</MenuItem>
            ))}
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

        <Button variant="contained" color="primary" type="submit">
          Book Now
        </Button>
      </form>
    </div>
  );
}
