import React from 'react';
import ListVisual from "./ListVisual";

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
        const { list = []} = this.state

        if (this.state.sortList == "active") {

            return (
                <div>
                    <ul>
                        < ListVisual list={list} active = {true} handleChange={this.handleChange}/>
                    </ul>
                </div>
            )
        } else if (this.state.sortList == "completed"){

            return (
                <div>
                    <ul>
                            < ListVisual list={list} active={false} handleChange={this.handleChange}/>
                    </ul>
                </div>
            )
        } else if (this.state.sortList == "all"){
            return (
                    <div>
                        <ul>
                            < ListVisual list={list} activ={true&&false}  handleChange={this.handleChange}/>
                        </ul>
                    </div>
                )
        }

        return (
            <div>
                <button onClick={this.buttonActive}> Отмеченные </button>
                <button onClick={this.buttonCompleted}> Пустые </button>
                <button onClick={this.buttonAll}> Все </button>
            </div>
        )
    }
}

export default ListTodo;