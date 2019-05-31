import React from 'react';
import Note from './Note.jsx';

import Masonry from 'react-masonry-component';

import './NotesGrid.less';

class NotesGrid extends React.Component {
    render() {
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
};

        return <h1> NotesGrid </h1>;
    }
};

export default NotesGrid;