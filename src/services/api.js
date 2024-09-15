import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

export const getNotes = () => axios.get(API_URL);
export const addNote = (note) =>  {axios.post(API_URL, note)};
export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`);