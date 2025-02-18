import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Avatar, TextField, InputAdornment, Grid, Card, CardContent, CardHeader, LinearProgress } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import '../styles/Dashboard.module.css';

export default function Dashboard() {
  return (
    <Box className="app-container">
      {/* AppBar */}
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Jacked
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            className="search-field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="search-icon" />
                </InputAdornment>
              ),
            }}
          />
          <Box ml={2} className="user-info">
            <Typography>Bluelock</Typography>
            <Avatar sx={{ ml: 1 }} src="../src/user.png" alt="User Avatar" />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Grid container spacing={2} mt={2}>
        {/* Main Section */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {/* Exercise Progress Card */}
            <Grid item xs={12} md={6}>
              <Card className="card">
                <CardHeader title="Weekly Exercise" className="card-header" />
                <CardContent>
                  <Typography variant="body2">Minutes Exercised: 500</Typography>
                  <LinearProgress variant="determinate" value={70} sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </Grid>

            {/* Fitness Progress Card */}
            <Grid item xs={12} md={6}>
              <Card className="card">
                <CardHeader title="Fitness Progress" className="card-header" />
                <CardContent>
                  <Typography variant="body2">Weight: 70kg</Typography>
                  <Typography variant="body2">Muscle Mass: 30kg</Typography>
                  <Typography variant="body2">Fat Percentage: 15%</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Calories Burned */}
            <Grid item xs={12} md={6}>
              <Card className="card">
                <CardContent>
                  <Typography variant="h6">Total Calories Burned</Typography>
                  <Typography variant="h4">1,250 kcal</Typography>
                </CardContent>
                <div className="card-footer">
                  <span className="value">+5%</span>
                  <span className="percentage">Increase from last week</span>
                </div>
              </Card>
            </Grid>

            {/* Goal Completion */}
            <Grid item xs={12} md={6}>
              <Card className="card">
                <CardContent>
                  <Typography variant="h6">Goal Completion</Typography>
                  <Typography variant="h4">80%</Typography>
                </CardContent>
                <div className="card-footer">
                  <span className="value">+10%</span>
                  <span className="percentage">Ahead of schedule</span>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
