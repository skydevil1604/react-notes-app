import React from 'react';

import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}

class App extends React.Component {
    /*getInitialState() {
        return getStateFromFlux();
    }*/

    constructor(props) {
        super(props);
        this.state = {
            isLoading: NotesStore.isLoading(),
            notes: NotesStore.getNotes()
        };
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);

    }
    

    componentWillMount() {
        NotesActions.loadNotes();
    }

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    }

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    }

    handleNoteAdd(noteData) {
        NotesActions.createNote(noteData);
}

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
            </div> 
        );
    }

    _onChange() {
        this.setState({
            isLoading: NotesStore.isLoading(),
            notes: NotesStore.getNotes()
        });
    };
}

export default App;