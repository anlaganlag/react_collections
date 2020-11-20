import React from 'react';
import './Warn.css';

class Warn extends React.Component {
    render( ) {
        
        const element = <div className="warning" >
            <h2 className="text">Warning</h2>
        </div>
        return <div>
                {this.props.status ? element : " "}
        </div>
    }
}

export default Warn;