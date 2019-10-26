import React from 'react';
import Item from "./Item";

class ListTodo extends React.PureComponent {

    state = {
        sortList: "all",
    }

    toggleCheck = (id) => {
        this.props.checkList(id)
    }

    buttonActive = () =>{
        this.setState({sortList: "active"})
    }

    buttonCompleted = () => {
        this.setState({sortList: "completed"})
    }

    buttonAll = () =>{
        this.setState({sortList: "all"})
    }

    changeItem = (value,id) => {
        this.props.changeItem(value,id)
    }

    deleteItem = (id) => {
        this.props.deleteItem(id)
    }

    render() {
        const { list = []} = this.props
        let listFilter = this.props.list

        if (this.state.sortList == "active"){

            listFilter = list.filter((item) => item.active == true)
        } else if (this.state.sortList == "completed"){

            listFilter = list.filter((item) => item.active == false)
        } else if (this.state.sortList == "all"){

            listFilter = this.props.list
        }

        return(
            <div>
                <ul>
                    { listFilter.map( (item,index) => (
                        <Item
                            key={item.id}
                            defaultChecked={item.active}
                            toggleCheck={this.toggleCheck}
                            value={item.value}
                            id={item.id}
                            changeItem={this.changeItem}
                            deleteItem={this.deleteItem}
                        />
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