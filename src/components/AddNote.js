import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { addNote } from '../services/api';

const AddNote = ({ onNoteAdded }) => {
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!noteContent.trim()) return;

    try {
      await addNote({ content: noteContent });
      onNoteAdded();
      setNoteContent('');
      window.location.reload();
    } catch (error) {
      console.error('Error adding note', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">Add a New Note</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Note Content"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          style={{ marginBottom: '1rem', backgroundColor: '#fff' }}
        />
        <Button variant="contained" color="primary" fullWidth size="large" type="submit">
          Add Note
        </Button>
      </form>
    </Container>
  );
};

export default AddNote;
