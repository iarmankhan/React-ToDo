import React, {Component} from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component{
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

TodoItem.prototype = {
    title: PropTypes.string.isRequired
};

export default TodoItem
