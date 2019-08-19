import { notepad } from '../app';
import { PRIORITY_TYPES } from '../utils/constants';

function removeListItemPriority(note) {
    const li = note.closest('.note-list__item');
    const { id } = li.dataset;
    const notee = notepad.findNoteById(id);
    const span = li.querySelector('.note__priority');
    if (notee.priority > PRIORITY_TYPES.LOW) {
        notee.priority -= 1;
        span.textContent = `Priority: ${notee.priority}`;
    }
}

export default removeListItemPriority;