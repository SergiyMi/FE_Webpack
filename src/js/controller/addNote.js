import shortid from 'shortid';
import { MESSAGE, refs } from '../utils/constants';
import { notepad } from '../app';
import addListItem from '../view/addListItem';

// refs.form.addEventListener('submit', addNote);

function addNote(event) {
    event.preventDefault();
    const title = refs.title.value || '';
    const body = refs.body.value || '';
    if (title.length === 0 || body.length === 0) {
        alert(MESSAGE.INVALID_VALUE);
        return;
    }
    const note = {
        id: shortid.generate(),
        title,
        body
    }
    notepad.saveNote(note);
    // console.log(notepad.notes);
    event.target.reset();
    addListItem(refs.list, note);
}

export default addNote;