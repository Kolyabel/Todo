import React from 'react';
import App from "./App";

class ListTodo extends React.PureComponent {
    render() {
        const { list = []} = this.props
        return (
            <ul>
                { list.map( (item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }
}

export default ListTodo;