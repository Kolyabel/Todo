import React from 'react';
import InputData from './InputData';
import ListTodo from './ListTodo';

class App extends React.Component {

    state = {
        list: []
    }

    listAdd = (value) => {
        const item = {
            value,
            active: false,
            id: new Date().getTime()
        }

        this.setState({
            list:[...this.state.list, item]
        })

    }

    changeItem = (value,id) => {
        const {list = []} = this.state

        const new_list = list.map((item) => {

            const objAdd = {...item}

            if (item.id == id) {
                objAdd.value = value
            }
            return objAdd
        })

        this.setState({list:new_list})

    }

    checkList = (id) => {
        const {list = []} = this.state

        const new_list = list.map((item) => {

        const objAdd = {...item}

            if (item.id == id) {
                objAdd.active = !objAdd.active
                }
                return objAdd
        })

        this.setState({list:new_list})
    }

    deleteItem = (id) => {
        const {list = []} = this.state

        const new_list = list.filter((item) => item.id != id)

        this.setState({list:new_list})
    }

    componentWillMount() {
        if (localStorage.getItem("list")){

            let listStorage = JSON.parse(localStorage.getItem("list"))

            this.setState({list:listStorage})
        }
    }

    render() {
        const { list = [] } = this.state

        if (list.length != 0){
            localStorage.setItem("list",JSON.stringify(this.state.list))
        }

        return (
            <div>
                Введите данные нажмите Enter
                <InputData listAdd={this.listAdd}/>
                <ListTodo
                    list={list}
                    checkList={this.checkList}
                    changeItem={this.changeItem}
                    deleteItem={this.deleteItem}
                />
            </div>
        );
    }
}

export default App;
