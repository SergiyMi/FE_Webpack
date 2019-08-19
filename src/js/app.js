import Notepad from './Notepad';
import { initialNotes } from './db';
import { refs } from './utils/constants';
import renderNoteList from './view/renderNoteList';
import addNote from './controller/addNote';
import deleteNote from './controller/deleteNote';
import editNote from './controller/editNote';
import searchNote from './controller/searchNote';
import addNotePriority from './controller/addNotePriority';
import removeNotePriority from './controller/removeNotePriority';

const notepad = new Notepad(initialNotes);
renderNoteList(refs.list, notepad.notes);

refs.form.addEventListener('submit', addNote);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', editNote);
refs.search.addEventListener('input', searchNote);
refs.list.addEventListener('click', addNotePriority);
refs.list.addEventListener('click', removeNotePriority);

export { notepad };
export default renderNoteList;