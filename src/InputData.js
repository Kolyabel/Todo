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
        if(event.keyCode == 13) {

            this.props.listAdd(this.state.value)

            this.setState({value: ""})
        }
    }

    allActive = () => {
        this.props.allActive()
    }

    render() {
        const { value } = this.state

        const { activeCheck = false } = this.props

        return (
            <div>
                 <input
                     type="checkbox"
                     checked={ activeCheck }
                     onChange={this.allActive}
                 />
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