import { notepad } from '../app';
import { PRIORITY_TYPES, refs } from '../utils/constants';

function addListItemPriority(note) {
    const li = note.closest('.note-list__item');
    const { id } = li.dataset;
    const notee = notepad.findNoteById(id);
    const span = li.querySelector('.note__priority');
    if (notee.priority < PRIORITY_TYPES.HIGH) {
        notee.priority += 1;
        span.textContent = `Priority: ${notee.priority}`;
    }
}

export default addListItemPriority;