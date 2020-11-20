import React, { Component } from 'react';
import { Card, TextField, Tooltip,Button } from '@material-ui/core';
import Icons from './Icon'
import '../scss/CreateNote.scss'
import Service from '../services/services';
const service = new Service()



class CreateNote extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            color: '',
            reminder: '',
            isArchive: false,
            isPinned: false,
            toggleCards: false
        }
    }

    input = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    toggleView(event) {
        this.setState({
            toggleCards: !this.state.toggleCards
        })
    }

    togglePin() {
        this.setState({
            isPinned: !this.state.isPinned
        })
    }

    createNote() {
        if (this.state.title.length > 0) {
            let note = {
                title: this.state.title,
                description: this.state.description,
                isPined: this.state.isPinned,
                isArchived: this.state.isArchive
            }
            console.log(note)
            service.addNote(note).then((data) => {
                console.log(data)
                this.props.getNotes()
            })
                .catch((err) => {
                    console.log(err)
                })
        }
        this.setState({
            toggleCards: !this.state.toggleCards,
            title: '',
            description: ''
        }
       
        )
    }


    render() {
        return (
            <div>
                <div>
                    {this.state.toggleCards ?
                        <Card className="OpenCard" variant="outlined" >
                            <div className="title">
                                <div>
                                    <TextField
                                        id='title'
                                        multiline={true}
                                        name='title'
                                        placeholder='Title'
                                        value={this.state.title}
                                        onChange={(event) => this.input(event)}
                                        InputProps={{
                                            disableUnderline: true
                                        }} />
                                </div>
                                {this.state.isPinned ?
                                    <div className="pinned" onClick={() => this.togglePin()}>
                                        <Tooltip title='Unpin note'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path fill="#000" d="M17 4a2 2 0 0 0-2-2H9c-1.1 0-2 .9-2 2v7l-2 3v2h6v5l1 1 1-1v-5h6v-2l-2-3V4z" />
                                            </svg>
                                        </Tooltip>
                                    </div>
                                    :
                                    <div className='pinned' onClick={() => this.togglePin()}>
                                        <Tooltip title='Pin note'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill='none' d="M0 0h24v24H0z" />
                                                <path d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z" />
                                            </svg>
                                        </Tooltip>
                                    </div>}
                            </div>
                            <div>
                                <TextField id='description'
                                    placeholder='Take a note...'
                                    multiline={true}
                                    autoFocus
                                    name='description'
                                    value={this.state.description}
                                    onChange={(event) => this.input(event)}
                                    InputProps={{
                                        disableUnderline: true
                                    }} />
                            </div>

                            <div>
                                < Icons />
                                <div id='button'>
                                    <Button onClick={() => this.createNote()} className='button'>Close</Button>
                                </div>
                            </div>
                        </Card>
                        :
                        <Card className="ClosedCard" variant="outlined" onClick={(event) => this.toggleView(event)} >
                            <div id="inputField">
                                <TextField
                                    id='closeText'
                                    placeholder='Take a note...'
                                    value={this.state.title}
                                    InputProps={{
                                        disableUnderline: true
                                    }} />
                            </div>
                        </Card>
                    }
                </div>
            </div>

        );
    }
}

export default CreateNote;
