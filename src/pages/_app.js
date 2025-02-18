import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const theme = createTheme();

export default function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
              <Header />
              <div style={{ display: 'flex', flex: 1 }}>
                  <Sidebar />
                  <main style={{ flex: 1, padding: '20px' }}>
                      <Component {...pageProps} />
                  </main>
              </div>
          </div>
      </ThemeProvider>
  );
}