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


            const newState = {
                list:[
                    ...this.state.list,
                    this.state.value
                ],
                value: ""
            }

            this.setState(newState)
        }          
    }

    render() {
        const { list, value } = this.state

        return (
            <div>        
                 <input 
                    value={value}
                    onChange={this.handleChange}   
                    onKeyDown={this.listTodo}                    
                 /> 

                 <ul>
                     { list.map( (item, index) => (
                        <li key={index}>{item}</li>
                     ))}
                 </ul>
            </div>
            
        );
    }
}

export default InputData;