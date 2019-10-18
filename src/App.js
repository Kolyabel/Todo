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
            active: "false",
            id: this.counter
        }

        this.counter += 1

        this.setState({
            list:[...this.state.list, item]
        })
    }

    render() {
        const { list = [] } = this.state

        return (
            <div>
                Введите данные нажмите Enter
                <InputData listAdd={this.listAdd}/>
                <ListTodo list={list} />
            </div>
        );
    }
}

export default App;
