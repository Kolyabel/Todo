import React from 'react';
import App from "./App";

class ListTodo extends React.PureComponent {
    constructor(props) {
        super(props)

        const {
            list = []
        } = props

        this.state = {
            list
        }

        console.log("listState",this.state.list)
    }

    // state = {
    //     check: false,
    //     listState: this.props
    // }

    handleChange = (event) => {
        console.log("checkbox",event.target.checked,event.target)
    }

    buttonActive = () =>{
    }

    buttonCompleted = () =>{
    }

    buttonAll = () =>{
    }

    render() {
        const { list = []} = this.props
        console.log("this.props",this.props, this.props.list)
        console.log("listState",this.state.list)
        return (
            <div>
                <ul>
                    { list.map( (item) => (
                        <li key={item.id}>
                            <input type="checkbox"
                                   onChange={this.handleChange}/>
                            {item.value}
                        </li>
                    ))}
                </ul>
                <button onClick={this.buttonActive}> Отмеченные </button>
                <button onClick={this.buttonCompleted}> Завершенные </button>
                <button onClick={this.buttonAll}> Все </button>
            </div>

        )
    }
}

export default ListTodo;