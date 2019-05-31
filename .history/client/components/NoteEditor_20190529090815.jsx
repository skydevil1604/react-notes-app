import React from 'react';

import ColorPicker from './ColorPicker.jsx';

import './NoteEditor.less';

class NoteEditor extends React.Component {

    /*getInitialState() {
        return {
            title: '',
            text: '',
            color: '#FFFFFF'
        };
    }*/

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            color: '#FFFFFF'
        };
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleColorChange(color) {
        this.setState({ color });
    }

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '', title: '', color: '#FFFFFF' });
}

    render() {
        return (
            <div className='NoteEditor'>
                <input
                    type='text'
                    className='NoteEditor__title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange.bind(this)}
                />
                <textarea
                    placeholder='Enter note text'
                    rows={5}
                    className='NoteEditor__text'
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <div className='NoteEditor__footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange.bind(this)}
                    />
                    <button
                        className='NoteEditor__button'
                        disabled={!this.state.text}
                        onClick={this.handleNoteAddю}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
};

export default NoteEditor;