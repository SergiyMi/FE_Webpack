import addListItemPriority from "../view/addListItemPriority";
import { refs } from '../utils/constants';
import { notepad } from '../app';
import renderNoteList from '../app';

function addNotePriority({ target }) {
    if (target.nodeName !== 'I') return;
    if (target.parentNode.dataset.action === 'increase-priority') {
        addListItemPriority(target);
    }
}

export default addNotePriority;