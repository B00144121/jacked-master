import React, { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        sex: '',
    });

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Registration successful!');
                router.push('/login');
            } else {
                alert('Registration failed.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: 400,
                margin: 'auto',
                mt: 4,
                padding: 3,
                border: '1px solid #ddd',
                borderRadius: 2,
            }}
        >
            <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
                Register
            </Typography>
            <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                select
                label="Sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
            >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
            </TextField>
            <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                Register
            </Button>
        </Box>
    );
};

export default Register;
