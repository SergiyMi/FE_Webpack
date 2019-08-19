import { notepad } from '../app';
import renderNoteList from '../view/renderNoteList';
import { refs } from '../utils/constants';

function searchNote(event) {
    event.preventDefault();
    const { target } = event;
    const searchItems = notepad.filterNotesByQuery(target.value);
    console.table(searchItems);
    renderNoteList(refs.list, searchItems);
}

export default searchNote;