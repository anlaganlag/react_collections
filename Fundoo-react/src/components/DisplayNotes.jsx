import React, { Component } from 'react';
import { Card, Tooltip } from '@material-ui/core';
import Icons from './Icon'
import { TextField } from '@material-ui/core';
import Service from '../services/services';
import '../scss/Display.scss'

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
const service = new Service()


const theme = createMuiTheme({
  overrides: {
    'MuiDrawer': {
      'paper': {
        top: "81px",
        width: "250px",
        height: 'calc(100% - 50px);'
      },
      'paperAnchorDockedLeft': {
        borderRight: '0px solid'
      }
    },
    'MuiPaper': {
      'elevation4': {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1)'
      },
      'rounded': {
        borderRadius: '10px',
        border: '1px solid lightgrey'
      }
    },
    'MuiTypography': {
      'noWrap': {
        overflow: 'initial'
      },
      'h6': {
        marginLeft: "10px",
        fontSize: '1.5rem'
      }
    },
    'MuiListItem': {
      'button': {
        '&:hover': { 'borderRadius': '0 25px 25px 0' }
      },
    },
    'MuiChip': {
      'root': {
        marginLeft: '10px',
        marginTop: '10px'
      }
    },
    'MuiButtonBase': {
      'root': {
        backgroundColor: null,
        borderRadius: null
      }
    },
    'MuiButton': {
      'root': {
        backgroundColor: 'transparent'
      }
    },
    'MuiIconButton': {
      'root': {
        backgroundColor: 'transparent'
      }
    },
    'MuiTooltip': {
      tooltip: {
        fontSize: "1em",

      }
    }
  }
});

class DisplayNote extends Component {

  constructor(props) {
    super(props)
    console.log(this.props);
    
    
  }
  

  archiveNotes = () => {
    let data = {
      noteIdList: [this.props.note.id],
      isArchived: true
    }

    service.archiveNotes(data)
      .then(res => {
        this.props.getNotes()
      })
      .catch(err => {
        console.log(err);

      })
  }



  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Card className='card' variant="outlined" style={{ backgroundColor: this.props.note.color }} >
            <div className="titleDisplay">
              <div className='label1'>
                <TextField
                  disabled
                  id='titleDisplay'
                  multiline={true}
                  name='title'
                  placeholder='Title'
                  value={this.props.note.title}
                  onChange={(event) => this.input(event)}
                  InputProps={{
                    disableUnderline: true
                  }} />
              </div>
              {this.props.note.isPined ?
                <div className="pinned">
                  <Tooltip title='Unpin note'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path fill="#000" d="M17 4a2 2 0 0 0-2-2H9c-1.1 0-2 .9-2 2v7l-2 3v2h6v5l1 1 1-1v-5h6v-2l-2-3V4z" />
                    </svg>
                  </Tooltip>
                </div>
                :
                <div className='pinned'>
                  <Tooltip title='Pin note'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill='none' d="M0 0h24v24H0z" />
                      <path d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z" />
                    </svg>
                  </Tooltip>
                </div>}
            </div>
            <div className='label1'>
              <TextField
                disabled
                id='descriptionDisplay'
                placeholder='Take a note...'
                multiline={true}
                autoFocus
                name='description'
                value={this.props.note.description}
                onChange={(event) => this.input(event)}
                InputProps={{
                  disableUnderline: true
                }} />
            </div>
            < Icons note={this.props.note}
              archive={this.archiveNotes}
            />
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default DisplayNote