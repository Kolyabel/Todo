import React from 'react';

import InputData from './InputData';
import ListTodo from './ListTodo';

class App extends React.Component {
    state = {
        list: [],
        typeFilter: "",
        activeCheck: false,
        counterCheck: 0,
    }

    componentDidMount() {
        let list = this.getLocalStorageValue("list", [])
        let typeFilter = this.getLocalStorageValue("typeFilter", "all")

        if( typeof list === "string" ){
            list = JSON.parse(list)
        }

        this.setState({
            list,
            typeFilter
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.list !== prevState.list) {
            localStorage.setItem("list",JSON.stringify(this.state.list))

            const { list = [] } = this.state

            let activeCheck = false

            let counterCheck = 0

            list.forEach(item => {
                if(item.active) {
                    counterCheck ++
                }
            })

            if (counterCheck == list.length) {
                activeCheck = true
            } else {
                activeCheck = false
            }

            this.setState({activeCheck: activeCheck, counterCheck: list.length - counterCheck})
        }

        if (this.state.typeFilter !== prevState.typeFilter) {
            localStorage.setItem("typeFilter", (this.state.typeFilter))
        }
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
        const { list = [] } = this.state

        const new_list = list.filter((item) => item.id != id)

        this.setState({list:new_list})
    }

    deleteActive = () => {
        const { list = [] } = this.state

        const new_list = list.filter((item) => item.active != true)

        this.setState({list:new_list})
    }

    getLocalStorageValue = ( name = "", def = false ) => {
        let value = localStorage.getItem(name)

        if(!value){
            value = def
        }

        return value
    }

    onChangeFilter = ( typeFilter = "" ) => {
        this.setState({
            typeFilter
        });
    }

    allActive = () => {
        const { list = [] } = this.state

        const new_list = list.map((item) => {
            return {
                ...item,
                active: true
            }
        })

        this.setState({list:new_list})
    }

    render() {
        const {
            list = [],
            typeFilter = "",
            activeCheck = false,
            counterCheck = 0
        } = this.state

        return (
            <div>
                Введите данные нажмите Enter
                <InputData
                    listAdd={this.listAdd}
                    allActive={this.allActive}
                    activeCheck={activeCheck}
                />
                <ListTodo
                    list={list}
                    checkList={this.checkList}
                    changeItem={this.changeItem}
                    deleteItem={this.deleteItem}
                    type={typeFilter}
                    onChangeFilter={this.onChangeFilter}
                    deleteActive={this.deleteActive}
                    counterCheck={counterCheck}
                />
            </div>
        );
    }
}

export default App;