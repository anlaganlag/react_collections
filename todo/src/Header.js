import React from 'react';

const Header = (props) => {
    return(
        <div className='card-header'>
            <h1 className='card-header-title header'>
                You have {props.num === 0 ? 'nothing' : props.num === 1 ? `${props.num} thing` : `${props.num} things`} on your to-do list.
            </h1>
        </div>
    )
}

export default Header;