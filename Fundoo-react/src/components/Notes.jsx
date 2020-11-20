import React, { Component } from 'react';
// import { Card, TextField, Button, Tooltip } from '@material-ui/core';
import CreateNote from './CreateNote'
import Service from '../services/services';
import DisplayNote from './DisplayNotes'
import '../scss/Notes.scss';
const service = new Service()

class Notes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        this.getNotes()
    }

    getNotes = () => {
        service.getNotes()
            .then(data => {
                this.setState({
                    notes: data.data.data.data
                    
                })
                
            }
            )
            .catch(err => {
                console.log(err);
            })
    }




    render() {
        return (
            <div>
                <div>
                    <CreateNote
                        getNotes={this.getNotes}
                    />
                </div>
                <div className='displayElements'>
                    {this.state.notes.reverse().map((item, index) =>
                        <div key={index}>
                            <DisplayNote
                                note={item} getNotes={this.getNotes} />
                        </div>
                    )}
                </div>
            </div>

        )
    }

}
export default Notes