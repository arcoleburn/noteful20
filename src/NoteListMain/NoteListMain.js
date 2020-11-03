import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { getNotesForFolder } from '../notes-helpers'
import './NoteListMain.css'

export default class NoteListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { folderId } = this.props.match.params
    console.log('match params', this.props)
    console.log('folder id from note list main match params', folderId)
    const { notes=[] } = this.context
 
    //console.log('context after notes', this.context)
    //console.log('notes from note list main', notes)
    //console.log('match params later', this.props)
    const notesForFolder = getNotesForFolder(notes, folderId)
    console.log('notes for folder', notesForFolder)
    return (
      <section className='NoteListMain'>
        <ul>
          {notesForFolder.map(note =>
          
            <li key={note.id}>
              
          
              <Note
                id={note.id}
                name={note.title}
                modified={note.date_modified}
              />
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-note'
            type='button'
            className='NoteListMain__add-note-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Note
          </CircleButton>
        </div>
      </section>
    )
  }
}
