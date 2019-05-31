import React from 'react';

import './Note.less';

class Note extends React.Component {
    render() {
        const style = { backgroundColor: this.props.color };


        return <h1> Note </h1>;
    }
};

export default Note;