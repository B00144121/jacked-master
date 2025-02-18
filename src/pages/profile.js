import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    sex: '',
    weight: '',
    height: '',
    activityLevel: '',
    fitnessGoal: '',
    duration: '',
  });

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user from localStorage
    if (user) {
      setUserData(user);
    }
  }, []);

  // Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit updated data to the backend
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUserData(updatedUser); // Update the state with the new data
        localStorage.setItem('user', JSON.stringify(updatedUser)); // Save updated user in localStorage
        alert('Profile updated successfully!');
      } else {
        alert('Update failed.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <Container
      sx={{
        padding: 4,
        marginTop: 4,
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 1,
        textAlign: 'center',
        maxWidth: 600,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Hello, {userData.name.split(' ')[0]}!
      </Typography>
      <form onSubmit={handleUpdate}>
        <Typography sx={{ marginBottom: 2 }}>
          Age: {userData.age || 'N/A'}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Sex: {userData.sex || 'N/A'}
        </Typography>
        <TextField
          label="Weight (kg)"
          name="weight"
          type="number"
          value={userData.weight || ''}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Height (cm)"
          name="height"
          type="number"
          value={userData.height || ''}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Typography sx={{ marginBottom: 2 }}>Activity Level:</Typography>
        <RadioGroup
          name="activityLevel"
          value={userData.activityLevel}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        >
          <FormControlLabel value="Sedentary" control={<Radio />} label="Sedentary" />
          <FormControlLabel value="Active" control={<Radio />} label="Active" />
        </RadioGroup>
        <TextField
          label="Fitness Goal"
          name="fitnessGoal"
          type="text"
          value={userData.fitnessGoal || ''}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Duration (Weeks/Months)"
          name="duration"
          type="text"
          value={userData.duration || ''}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 3 }}
        >
          Update Stats
        </Button>
      </form>
    </Container>
  );
};

export default Profile;
