import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { Button, IconButton } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import '../scss/Forgot.scss'
import userService from '../services/userService';
const service = new userService()



var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm

class Forgot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            snackbaropen: false,
            snackbarmsg: ''
        }
        this.submit = this.submit.bind(this)
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false })
    }

    input = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = (event) => {
        if (!emailPattern.test(this.state.email)) {
            alert('Enter a proper email address');

        }
        else {

            var value =
            {
                email: this.state.email
            }

            service.forgot(value)
                .then(res => {
                    console.log(res)
                    this.setState({snackbaropen:true,snackbarmsg:'Link has been sent to your registered email address'})
                    this.setState({
                        email: ''
                    })
                })
                .catch(err => {
                    this.setState({snackbaropen:true,snackbarmsg:err})

                })
        }
    }

    render() {
        return (
            <div>
                <Card className="forgotCard" vairant="outlined">
                    <div className='forgotTitle'>
                        <h3 className="forgotHead">Fundoo</h3>
                    </div>
                    <div className='forgotText'>
                        <h3>Enter your Email address</h3>
                    </div >
                    <form>
                        <div className="email-position">
                            <TextField id='forgot-email'
                                label='Email'
                                name='email'
                                autoComplete='off'
                                margin='normal'
                                variant='outlined'
                                value={this.state.email}
                                onChange={(event) => this.input(event)}>
                            </TextField>
                        </div>
                        <div className='submitbutton' >
                            <Button
                                color='primary'
                                margin='normal'
                                variant='contained'
                                onClick={(event) => this.submit(event)}>Submit</Button>
                        </div>
                    </form>
                </Card>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.snackbarClose}
                        >
                            x
                        </IconButton>
                    ]}
                />
            </div>
        )
    }
}
export default Forgot;