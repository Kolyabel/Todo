import React from 'react';

class InputData extends React.PureComponent {
    state = {
        value: "",
        list: "",    
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

            console.log("valueInput:",k.target.value)
                    
            this.setState({
                list: k.target, 
                value: ""
            })

            console.log("list:",this.state.list.value)            
        }          
    }

    render() {
        //const { value } = this.state 

        const listItems = state.list.map((item) => 
                 <li key={new Date().getTime()}>{item}</li>
                );

            console.log("listItems:",listItems)

        return (
            <div>        
                 <input 
                    value={this.state.value}
                    onChange={this.hendleChange}   
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