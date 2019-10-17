import React from 'react';

const mapTodo = []

class InputData extends React.PureComponent {
    state = {
        value: "",
        elMap: "",    
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
                    
            this.setState({elMap: k.target})
            this.setState({value: ""})

            mapTodo.push(<li key={new Date().getTime()}>{this.state.elMap.value}</li>)

            console.log("map:",mapTodo)
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
                     {mapTodo}
                 </ul>
            </div>
            
        );
    }
}

export default InputData;