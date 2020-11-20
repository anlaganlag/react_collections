import React,{Component} from 'react';
import { Popover} from '@material-ui/core';

class RemindPopper extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render(){
        return(
            <div>
                <Popover open={this.props.open}
                anchorEl={this.props.anchorEl}

                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal:'center'
                }}>
                   
                </Popover>
            </div>
        )
    }
}

export default RemindPopper;