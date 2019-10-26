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

    onKey = (event) => {
        if(event.keyCode == 13) {
            this.props.changeItem(this.state.value,this.props.id)
            this.setState({inputView: false})
        }

        if(event.keyCode == 27) {
            this.setState({inputView: false})
        }
    }

    DoubleClick = () => {
        this.setState({inputView:true})
    }

    toggleCheck = (id) => {
        this.props.toggleCheck(this.props.id)
    }

    deleteItem = (id) => {
        this.props.deleteItem(this.props.id)
    }

    render() {
        const { value } = this.state

        if (this.state.inputView == false){
            return (
                <li key={this.props.key}>
                    <input
                        type="checkbox"
                        defaultChecked={this.props.defaultChecked}
                        onChange={this.toggleCheck}
                    />

                    <span onDoubleClick={this.DoubleClick}>
                        {this.props.value}
                    </span>

                    <input
                        type="button"
                        value="Delete"
                        onClick={this.deleteItem}
                    />
                </li>
            )
        } else {
            return (
                <li key={this.props.key}>
                    <input
                        type="checkbox"
                        defaultChecked={this.props.defaultChecked}
                        onChange={this.toggleCheck}
                    />

                    <input
                        value={value}
                        onChange={this.handleChange}
                        onKeyDown={this.onKey}
                    />
                </li>
            )
        }
    }
}

export default Item