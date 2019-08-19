import removeListItemPriority from "../view/removeListItemPriority";
import { refs } from '../utils/constants';
import { notepad } from '../app';
import renderNoteList from '../app';

function removeNotePriority({ target }) {
    if (target.nodeName !== 'I') return;
    if (target.parentNode.dataset.action === 'decrease-priority') {
        removeListItemPriority(target);
    }
}

export default removeNotePriority;