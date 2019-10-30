import React from 'react';
import Item from "./Item";

class ListTodo extends React.PureComponent {

    toggleCheck = (id) => {
        this.props.checkList(id)
    }

    handleChangeFilter = ( type = "") => {
        this.props.onChangeFilter(type)
    }

    changeItem = (value,id) => {
        this.props.changeItem(value,id)
    }

    deleteItem = (id) => {
        this.props.deleteItem(id)
    }

    filterList = ( item ) => {
        const { type = "" } = this.props

        if (type == "active")
        {
            return item.active == true
        }
        else if (type == "completed")
        {
            return  item.active == false
        }
        else
        {
            return true
        }
    }

    deleteActive = () => {
        this.props.deleteActive()
    }

    render() {
        const { list = [] } = this.props

        return(
            <div>
                <ul>
                    { list.
                        filter( item => this.filterList(item) ).
                        map( item => (
                            <Item
                                key={item.id}
                                defaultChecked={item.active}
                                toggleCheck={this.toggleCheck}
                                value={item.value}
                                id={item.id}
                                changeItem={this.changeItem}
                                deleteItem={this.deleteItem}
                            />
                        )
                    )}
                </ul>

                <Button
                    onClick={this.handleChangeFilter}
                    type="active"
                >
                    Отмеченные
                </Button>
                <button
                    onClick={this.handleChangeFilter}
                    type="completed"
                >
                    Пустые
                </button>
                <button
                    onClick={this.handleChangeFilter}
                    type="all"
                >
                    Все
                </button>
                <button
                    onClick={this.deleteActive}
                >
                    Удалить отмеченные
                </button>
            </div>
        )
    }
}

class Button extends React.PureComponent{
    handleClick = () => {
        const { onClick, type = "" } = this.props

        if(
            onClick !== undefined &&
            typeof onClick === "function"
        ){
            onClick( type )
        }
    }

    render() {
        const { children = null } = this.props

       /* let tmp = ""

        if( this.props.type !== undefined ) {
            tmp = this.props.type
        }

        const type = tmp*/

        return (
            <button onClick={this.handleClick}>
                { children }
            </button>
        );
    }
}

export default ListTodo;