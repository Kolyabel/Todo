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
                    
            this.setState({
                this.state.list.push(this.state.value), 
                value: ""
            })

            console.log("list:",this.state.list)            
        }          
    }

    render() {
        const { value } = this.state 

        const listItems = this.state.list.map((item) => 
                 <li key={new Date().getTime()}>{item.value}</li>
                );

            console.log("listItems:",listItems)

        return (
            <div>        
                 <input 
                    value={this.state.value}
                    onChange={this.handleChange}   
                    onKeyDown={this.listTodo}                    
                 /> 

                 <ul>
                     {listItems}
                 </ul>
            </div>
            
        );
    }
}

export default InputData;