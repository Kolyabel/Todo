import React from 'react';
import App from "./App";
import ListTodo from "./ListTodo";

class ListVisual extends React.PureComponent {

    render() {

        return (

            this.props.list.filter((item) => item.active == this.props.active).map((item) => (

                <li key={item.id}>
                    <input name={item.id}
                           type="checkbox"
                           checked={item.active}
                           onChange={() => this.props.handleChange(item.id)}/>
                    {item.value}
                </li>
            ))
        )
    }
}

export default ListVisual;