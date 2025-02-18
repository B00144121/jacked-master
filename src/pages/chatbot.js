import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I assist you today?' },
    ]);
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        // Add user message to chat
        setMessages((prev) => [...prev, { sender: 'user', text: input }]);

        // Call the API (replace with your API call logic)
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();

            // Add bot response to chat
            setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
        } catch (error) {
            console.error('Error fetching API response:', error);
            setMessages((prev) => [...prev, { sender: 'bot', text: 'Sorry, something went wrong!' }]);
        }

        setInput(''); // Clear input field
    };

    return (
        <Box
            sx={{
                maxWidth: 600,
                margin: 'auto',
                mt: 4,
                padding: 2,
                border: '1px solid #ddd',
                borderRadius: 2,
            }}
        >
            <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
                AI Chatbot
            </Typography>
            <Paper
                elevation={3}
                sx={{ maxHeight: 400, overflowY: 'auto', padding: 2, marginBottom: 2 }}
            >
                <List>
                    {messages.map((msg, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={msg.sender === 'user' ? 'You' : 'AI'}
                                secondary={msg.text}
                                sx={{
                                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Box display="flex" gap={2}>
                <TextField
                    fullWidth
                    placeholder="Type your message here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default Chatbot;
