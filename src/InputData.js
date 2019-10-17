import React from 'react';

class InputData extends React.PureComponent {
    state = {
        value: "",
        list: "",    
    }

    hendleChange = (e) => {
        const { value = "" } = e.target

        const state = {
            value
        }

        this.setState(state)
    }

    listTodo = (k) => {
        if (k.key === "Enter") { 

            console.log("valueInput:",k.target.value)
                    
            this.setState({
                list: k.target, 
                value: ""
            })

            console.log("list:",this.state.list.value)

            const listItems = this.state.map((item) => 
                 <li key={new Date().getTime()}>{item.list}</li>
                );

            console.log("list:",this.listItems)
        }   
         
    }

    render() {
        //const { value } = this.state 

        return (
            <div>        
                 <input 
                    value={this.state.value}
                    onChange={this.hendleChange}   
                    onKeyDown={this.listTodo}                    
                 /> 

                 <ul>
                     {this.listItems}
                 </ul>
            </div>
            
        );
    }
}

export default InputData;