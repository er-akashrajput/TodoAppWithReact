import React, { Component } from 'react';
import './App.css';
import Note from "./components/Note";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value })
  }

  addNote() {
    if (this.state.noteText === '') { return }

    const notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: '' });
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addNote();
    }
  }
  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr })
  }



  render() {

    let notes = this.state.notes.map((val, key) => {
      return <Note
        key={key}
        text={val}
        deleteMethod={() => this.deleteNote(key)} />
    })

    return (
      <div className="container">
        <div className="header">Todo App with React</div>
        <p>NOTE: To delete a note, Just click on it. Its that simple.</p>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)} > +</div>
        <input type="text" className="textInput"
          placeholder="Type here and Press ENTER or '+' Button to save. "
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          ref={((input) => { this.textInput = input })}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    )
  };
}

export default App;
