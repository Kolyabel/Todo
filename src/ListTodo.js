import React from 'react';

class ListTodo extends React.PureComponent {

    state = {
        sortList: "all",
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

    listElemAdd = (value,id) => {
        this.props.listElemAdd(value,id)
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
                        <li key={item.id}>
                            <input name={index}
                                   type="checkbox"
                                   defaultChecked={item.active}
                                   onChange={() => this.handleChange(item.id)}/>
                                        <ListValue value={item.value}
                                                   id={item.id}
                                                   listElemAdd={this.listElemAdd}/>
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


class ListValue extends React.PureComponent{

    state = {
        value: this.props.value,
        listView: false
    }

    handleChange = (event) => {
        const value = event.target.value
        this.setState({value})
    }

    onKey = (event) => {

        let tempTarget = event.target
        let target

        document.addEventListener("click", (event) => {

            target = event.target
            if (target == tempTarget) {
                console.log("POPAL")
            } else if(target !== tempTarget) {
                console.log("NE POPAL")
            }
        })

        if(event.keyCode == 13) {

            this.props.listElemAdd(this.state.value,this.props.id)
            this.setState({listView: false})
        }
        if(event.keyCode == 27) {
            this.setState({listView: false})
        }
    }

    DoubleClick = () => {
        this.setState({listView:true})
    }

    render() {

        const { value } = this.state
        if (this.state.listView == false){
            return (
                <span onDoubleClick={this.DoubleClick}>
                     {this.props.value}
                </span>

            )
        } else {
            return (
               <input value={value}
                      onClick={this.onKey}
                      onChange={this.handleChange}
                      onKeyDown={this.onKey}/>
            )
        }

    }
}
export default ListTodo;