import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Divider, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { getNotes, deleteNote } from '../services/api';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error('Error deleting note', error);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', marginTop: '2rem' }}>
      <Typography variant="h5" color="primary" align="center" gutterBottom>Your Notes</Typography>
      <List>
        {notes.map((note) => (
          <React.Fragment key={note.id}>
            <ListItem
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '0.5rem' }}
            >
              <ListItemText 
                primary={note.content} 
                secondary={note?.date} 
                style={{ flex: 1, marginRight: '1rem', wordWrap: 'break-word' }} 
              />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(note.id)}>
                <DeleteIcon color="secondary" />
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default NoteList;
