import React from 'react';

class InputData extends React.PureComponent {
    state = {
        value: "",
        list: [],    
    }

    handleChange = (event) => {
        const { value = "" } = event.target

        const state = {
            value
        }

        this.setState(state)
    }

    listTodo = (event) => {
        if (event.key === "Enter") { 

            console.log("valueInput:",event.target.value)
                    
            const newState = {
                list:[].push(...this.state.list, this.state.value),
                value: ""
            }

            this.setState(newState)

            console.log("list:",this.state.list)            
        }          
    }

    render() {
        const { value } = this.state 

        return (
            <div>        
                 <input 
                    value={this.state.value}
                    onChange={this.handleChange}   
                    onKeyDown={this.listTodo}                    
                 /> 

                 <ul> {
                        this.state.list.map((item) => (
                        <li key={new Date().getTime()}>{item.value}</li>
                       ))
                       }
                 </ul>
            </div>
            
        );
    }
}

export default InputData;