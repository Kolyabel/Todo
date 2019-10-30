import React from 'react';

class Item extends React.PureComponent{
    state = {
        value: this.props.value,
        inputView: false,
    }


    handleChange = (event) => {
        const value = event.target.value
        this.setState({value})
    }

    onKey = (event, clickOut) => {
        if (event.keyCode == 13 || clickOut == true) {
            this.props.changeItem(this.state.value,this.props.id)
            document.removeEventListener("click", this.handleClick)
            clickOut = false
            this.setState({inputView: false})
        }

        if (event.keyCode == 27) {
            this.setState({inputView: false, value:this.props.value})
            document.removeEventListener("click", this.handleClick)
        }
    }

    DoubleClick = () => {
        this.setState({inputView:true})
    }

    toggleCheck = () => {
        this.props.toggleCheck(this.props.id)
    }

    deleteItem = () => {
        this.props.deleteItem(this.props.id)
    }

    clickOutInput = () => {
        document.addEventListener("click", this.handleClick)
    }

    handleClick = (e) => {
        console.log(e.target)
        if (e.target.id != this.props.id) {
            this.onKey(event, true)
        }
    }

    render() {
        const { value, inputView } = this.state

        return (
            <li
                className="item"
                key={this.props.key}
            >
                <input
                    type="checkbox"
                    defaultChecked={this.props.defaultChecked}
                    onChange={this.toggleCheck}
                />

                { !inputView && <span onDoubleClick={this.DoubleClick}>
                    { this.props.value }
                </span> }

                { inputView && <input
                   // autoFocus={true}
                    id={this.props.id}
                    value={value}
                    onChange={this.handleChange}
                    onKeyDown={this.onKey}
                    onClick={this.clickOutInput}
                /> }

                <button
                    onClick={this.deleteItem}
                >
                    Del
                </button>
            </li>
        )
    }
}

export default Item