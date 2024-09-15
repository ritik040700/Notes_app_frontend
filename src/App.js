import React, { useState } from 'react';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#f3f4f6',
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
      color: '#333',
    },
  },
});

function App() {
  const [editingNote, setEditingNote] = useState(null);

  const handleNoteAdded = () => {
    setEditingNote(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ paddingTop: '2rem', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <Typography variant="h2" gutterBottom align="center">
          Notes App
        </Typography>
        <AddNote onNoteAdded={handleNoteAdded} />
        <NoteList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
