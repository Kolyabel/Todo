import React from 'react';

class Item extends React.PureComponent{

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
            } else if(target != tempTarget) {
                console.log("NE POPAL")
            }
        })


        if(event.keyCode == 13) {

            this.props.itemAdd(this.state.value,this.props.id)
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
                       onClick={event.preventDefault}
                       onChange={this.handleChange}
                       onKeyDown={this.onKey}/>
            )
        }

    }
}

export default Item