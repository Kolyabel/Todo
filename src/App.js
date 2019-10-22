import React from 'react';
import InputData from './InputData';
import ListTodo from './ListTodo';

class App extends React.Component {
    state = {
        list: []
    }

    counter = 0

    listAdd = (value) => {
        const item = {
            value,
            active: false,
            id: this.counter
        }

        this.counter += 1

        this.setState({
            list:[...this.state.list, item]
        })
    }

    checkList = (id) => {
        const {list = []} = this.state

        const new_list = list.map((item) => {
        const objAdd = item
            if (item.id == id) {
                objAdd.active = !objAdd.active
                }
                return objAdd
        })

        console.log("newList", new_list)
        this.setState({list:new_list})
    }

    render() {
        const { list = [] } = this.state

        return (
            <div>
                Введите данные нажмите Enter
                <InputData listAdd={this.listAdd}/>
                <ListTodo list={list} checkList={this.checkList} />
            </div>
        );
    }
}

export default App;
