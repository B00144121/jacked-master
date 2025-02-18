import React from 'react';
import { useRouter } from 'next/router';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ChatIcon from '@mui/icons-material/Chat';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Sidebar = () => {
    const router = useRouter();

    const navigate = (path) => {
        router.push(path);
    };

    return (
        <div style={{ width: '200px', height: '100vh', backgroundColor: '#f5f5f5', padding: '10px' }}>
            <List>
                <ListItem button onClick={() => navigate('/')}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={() => navigate('/profile')}>
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button onClick={() => navigate('/meal-planner')}>
                    <ListItemIcon><FoodBankIcon /></ListItemIcon>
                    <ListItemText primary="Meal Planner" />
                </ListItem>
                <ListItem button onClick={() => navigate('/chatbot')}>
                    <ListItemIcon><ChatIcon /></ListItemIcon>
                    <ListItemText primary="AI Chatbot" />
                </ListItem>
                <ListItem button onClick={() => navigate('/register')}>
                    <ListItemIcon><PersonAddIcon /></ListItemIcon>
                    <ListItemText primary="Register" />
                </ListItem>
                <ListItem button onClick={() => navigate('/login')}>
                    <ListItemIcon><LoginIcon /></ListItemIcon>
                    <ListItemText primary="Login" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
