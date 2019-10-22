import React from 'react';
import App from "./App";

class ListTodo extends React.PureComponent {
    constructor(props) {
        super(props)

        const {
            list = [],
        } = props

        this.state = {
            list,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.list !== prevProps.list) {
            this.setState({list: this.props.list})
        }
    }

    handleChange = (id) => {
        this.props.checkList(id)
    }

    buttonActive = () =>{
        const { list = []} = this.props
        const listMap = list.filter((item) => item.active == true)

        this.setState({list:listMap})
    }

    buttonCompleted = () => {
        const { list = []} = this.props
        const listMap = list.filter((item) => item.active == false)

        this.setState({list: listMap})
    }

    buttonAll = () =>{
        this.setState({list: this.props.list})
    }

    render() {
        const { list = []} = this.state

        return (
            <div>
                <ul>
                    { list.map( (item) => (
                        <li key={item.id}>
                            <input name={item.id}
                                   type="checkbox"
                                   checked={item.active}
                                   onChange={() => this.handleChange(item.id)}/>
                            {item.value}
                        </li>
                    ))}
                </ul>
                <button onClick={this.buttonActive}> Отмеченные </button>
                <button onClick={this.buttonCompleted}> Пустые </button>
                <button onClick={this.buttonAll}> Все </button>
            </div>

        )
    }
}

export default ListTodo;