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
    }

    componentDidUpdate(prevProps) {
        if (this.props.list !== prevProps.list) {
            this.setState(this.props)
        }
    }

    // state = {
    //     check: false,
    //     listState: this.props
    // }

    handleChange = (event) => {
        const listMap = this.state.list.map(function (item,index) {
            if (index == event.target.name) {
                item.active = !item.active;
            }
            return item;
        })
        console.log("listMap", listMap)
        this.setState(listMap)

    }

    buttonActive = () =>{
        this.setState(state => {
            const list = state.list.filter((item) => item.active == true)
            return {list};
        })
    }

    buttonCompleted = () =>{
        this.setState(state => {
            const list = state.list.filter((item) => item.active == false)
            return {list};
        })
    }

    buttonAll = () =>{
        this.setState(this.props)
    }

    render() {
        const { list = []} = this.state
        return (
            <div>
                <ul>
                    { list.map( (item,index) => (
                        <li key={item.id}>
                            <input name={index}
                                   type="checkbox"
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