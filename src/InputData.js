import React from 'react';

class InputData extends React.PureComponent {
    state = {
        value: "",
    }

    handleChange = (event) => {

        const value = event.target.value

        this.setState({value})
    }

    onKey = (event) => {
        console.log("onKey.start", "key:",event.key)
        if(event.keyCode == 13) {
            console.log("onKey.start", "ok")
            this.props.listAdd(this.state.value)

            this.setState({value: ""})
        }
    }

    render() {
        const { value } = this.state

        return (
            <div>        
                 <input 
                    value={value}
                    onChange={this.handleChange}
                    onKeyDown={this.onKey}
                 />
            </div>
            
        );
    }
}

export default InputData;