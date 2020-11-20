import React from 'react';

class List extends React.Component {

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) => <li key={number.toString()}key={number.toString()}>{number}</li>)
        return <div>
            <ul> {listItems}</ul>
        </div>
    }
}

export default List