import React from 'react';

class Item extends React.PureComponent{
    constructor(props) {
        super(props);

        let value = props.value

        this.state = {
            value,
            inputView: false,
        }
    }

    itemRef = null

    componentDidUpdate(prevProps, prevState) {
        if( prevState.inputView != this.state.inputView )
        {
            if(this.state.inputView)
            {
                document.addEventListener("click", this.handleClick )
            }
            else if(!this.state.inputView)
            {
                document.removeEventListener("click", this.handleClick)
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick)
    }

    handleChange = (event) => {
        const value = event.target.value

        this.setState({value})
    }

    onKey = (event) => {
        if (event.keyCode == 13 ) {
            this.props.changeItem(this.state.value,this.props.id)

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

    handleClick = (e) => {
        if (e.target.closest("item") != this.itemRef) {
            this.setState({
                inputView: false
            });
        }
    }

    initRef = (node) => {
        this.itemRef = node
    }

    render() {
        const { value, inputView } = this.state

        const {
            active = false,
        } = this.props

        return (
            <li
                ref={this.initRef}
                className="item"
            >
                <input
                    type="checkbox"
                    checked={ active }
                    onChange={this.toggleCheck}
                />

                { !inputView && <span onDoubleClick={this.DoubleClick}>
                    { this.props.value }
                </span> }

                { inputView && <input
                    value={value}
                    onChange={this.handleChange}
                    onKeyDown={this.onKey}
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