import React from 'react';

class ListTodo extends React.PureComponent {

    state = {
        sortList: "all"
    }

    handleChange = (id) => {
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

    render() {
        const { list = []} = this.props
        const activeSort = "all"
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
                            <li key={item.id}>
                                <input name={index}
                                       type="checkbox"
                                       defaultChecked={item.active}
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