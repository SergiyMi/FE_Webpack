import { notepad } from '../app';
import { PRIORITY_TYPES } from '../utils/constants';

function removeListItemPriority(note) {
    const li = note.closest('.note-list__item');
    const { id } = li.dataset;
    const notee = notepad.findNoteById(id);
    if (notee.priority > PRIORITY_TYPES.LOW) {
        notee.priority -= 1;
    }
}

export default removeListItemPriority;