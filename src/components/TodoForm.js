import React from 'react'


class TodoForm extends React.Component {

    constructor() {
        super();
        this.state={
            item: ''
        }
    };

    handleChange = (e) =>{
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addItem(this.state.item)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    To do:
                    <input
                    name = "item"
                    value ={this.state.item}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;