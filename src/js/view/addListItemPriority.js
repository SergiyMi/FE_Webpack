import { notepad } from '../app';
import { PRIORITY_TYPES } from '../utils/constants';

function addListItemPriority(note) {
    const li = note.closest('.note-list__item');
    const { id } = li.dataset;
    const notee = notepad.findNoteById(id);
    if (notee.priority < PRIORITY_TYPES.HIGH) {
        notee.priority += 1;
    }
}

export default addListItemPriority;