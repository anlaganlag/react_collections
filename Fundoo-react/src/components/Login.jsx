import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { Button, IconButton } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import '../scss/Login.scss'
import userService from '../services/userService';
const service = new userService()

var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm,
  passwordPattern = /^[a-zA-Z0-9]{6,20}$/;

const theme = createMuiTheme({
  overrides: {

    'MuiPaper': {
      'elevation4': {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1)'
      },
      'rounded': {
        borderRadius: '10px',
        border: '1px solid lightgrey'
      }
    },

  }
});


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    event.preventDefault();
    if (!emailPattern.test(this.state.email) || !passwordPattern.test(this.state.password)) {
      this.setState({ snackbaropen: true, snackbarmsg: 'Email or password invaild' })
      return;
    }
    else {
      let call =
      {
        email: this.state.email,
        password: this.state.password
      }

      console.log("sucess");
      console.log(call)


      service.login(call)
        .then(res => {

          console.log(res)



          alert('Logged in successfully')

          // sessionStorage.setItem('token', res.data.id);
          localStorage.setItem('token', res.data.id)

          this.props.history.push('/dashboard/notes')
        })
        .catch(err => {
          this.setState({ snackbaropen: true, snackbarmsg: err })
        })

    }

  }

  showPassword(event) {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Card className="loginCard" vairant="outlined">
            <div className='logintitle'>
              <h3 className="loginHead">Fundoo</h3>
              <div className='loginText'>
                <h3>Login into your Fundoo account</h3>
              </div>
            </div>
            <form>
              <div>
                <TextField className='loginTextField'
                  label='Email'
                  name='email'
                  margin='normal'
                  autoComplete='email'
                  variant='outlined'
                  value={this.state.email}
                  onChange={(event) => this.input(event)}>
                  >
              </TextField>
              </div>
              <div>
                <TextField className='loginTextField'
                  label='Password'
                  name='password'
                  type={this.state.show ? 'text' : 'password'}
                  margin='normal'
                  autoComplete='off'
                  variant='outlined'
                  value={this.state.password}
                  onChange={(event) => this.input(event)}>
                  >
              </TextField>
              </div>
              <div className='loginShowPassword'>
                <IconButton onClick={(event) => this.showPassword(event)}>
                  {this.state.show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </div>
            </form>
            <div>
              <div className='forgot'>
                <a className='Link' href='/forgot'>Forgot password?</a>
              </div>
              <div className='loginButton'>
                <Button color='primary'
                  margin='normal'
                  variant='contained'
                  onClick={(event) => this.submit(event)}
                > Submit</Button>
              </div>
            </div>
            <div className='registerLogintext'>
              <h3>Not registered yet?</h3>
              <a className='Link' href='/register'>Create Fundoo Account</a>
            </div>
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
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;

