import React from 'react';

import ColorPicker from './ColorPicker.jsx';

import './NoteEditor.less';

class NoteEditor extends React.Component {

    getInitialState() {
        return {
            title: '',
            text: '',
            color: '#FFFFFF'
        };
    },

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    },

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    },

    handleColorChange(color) {
        this.setState({ color });
    },

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '', title: '', color: '#FFFFFF' });
},
    render() {
        return <h1> NoteEditor </h1>;
    }
};

export default NoteEditor;