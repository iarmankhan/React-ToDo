import React, {Component} from "react";

class AddTodo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    onChangeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input type="text" name="title" value={this.state.title} onChange={this.onChangeHandler} style={{flex: '10', padding: '5px'}} placeholder="Add ToDo"  />
                <input type="submit" value="Add" className="btn" style={{flex: '1'}} />
            </form>
        );
    }
}

export default AddTodo
