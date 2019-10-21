import React from 'react';
import App from "./App";

class ListTodo extends React.PureComponent {
    constructor(props) {
        super(props)

        const {
            list = [],
            listAll = [],
        } = props

        this.state = {
            list,
            listAll,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.list !== prevProps.list) {
            this.setState(this.props)
        }
    }

    handleChange = (event) => {
        const listMap = this.state.list.map(function (item,index) {

            if (index == event.target.name) {
                item.active = !item.active;
            }

            return item;
        })

        this.setState({list: listMap, listAll: listMap})
    }

    buttonActive = () =>{
        this.setState({list: this.state.listAll})

        const list = this.state.list.filter(function(item) {
            return item.active == true;
        })

        this.setState({list})
    }

    buttonCompleted = () =>{
        this.setState({list: this.state.listAll})

        this.setState(state => {
            const list = state.list.filter((item) => item.active == false)
            return {list};
        })
    }

    buttonAll = () =>{
        this.setState({list: this.state.listAll})
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
                                   checked={item.active}
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