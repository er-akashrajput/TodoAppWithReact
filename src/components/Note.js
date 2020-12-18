import React, { Component } from 'react';


class Note extends Component {


    render() {
        return (
            <div className="noteContainer" onClick={this.props.deleteMethod}>
                <div className="note" >
                    <p className="noteText"> {this.props.text}</p>
                </div>
                <div className="overlay">
                    <div className="middle">
                        <h4>Delete</h4>
                    </div>
                </div>
            </div>
        );
    };
}

export default Note;
