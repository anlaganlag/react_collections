import React, { Component } from 'react';
import DisplayNote from './DisplayNotes'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import Service from '../services/services';
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



class Archive extends Component {

    constructor(props) {
        super(props)

        
        this.state = {
            notes: []
        }
    }

  

    componentDidMount() {
        this.getArchivedNotes()
    }


    getArchivedNotes = () => {

        service.getArchivedNotes()
            .then(data => {
                this.setState({
                    notes: data.data.data.data
                })

            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <div className='displayElements'>
                        {this.state.notes.reverse().map((item, index) =>
                            <div key={index}>
                                <DisplayNote
                                    note={item} getArchievedNotes={this.getArchivedNotes} />
                            </div>
                        )}
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Archive;